import { Client } from "@notionhq/client";


const notion = new Client({ auth: process.env.NOTION_SECRET });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function getBlogPosts() {
  if (!databaseId) {
    throw new Error("🚨 Notion Database ID is missing! Check your .env.local file.");
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: { property: "Published", checkbox: { equals: true } },
      sorts: [{ property: "Created", direction: "descending" }],
    });

    
    if (!response.results) {
      throw new Error("🚨 Notion API returned undefined! Check your API key.");
    }

    return response.results.map((page) => ({
      id: page.id,
      title: page.properties.Title?.title[0]?.text.content || "Untitled",
      slug: page.properties.Slug?.rich_text[0]?.text.content || "missing-slug",
      excerpt: page.properties.Excerpt?.rich_text[0]?.text.content || "No excerpt available.",
      cover: page.properties.Cover?.files[0]?.file.url || "/default-cover.jpg",
      tags: page.properties.Tags?.multi_select.map(tag => tag.name) || [],
        date: page.properties.Created?.created_time || null,
    }));
  } catch (error) {
    console.error("🚨 Notion API Error:", error);
    return [];
  }
}



// Fetch a single blog post by slug
export async function getBlogPost(slug) {
    if (!slug) {
      throw new Error("🚨 No slug provided to getBlogPost()!");
    }
  
    console.log("📌 Fetching blog post for slug:", slug);
  
    try {
      const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
          property: "Slug",
          rich_text: { equals: slug },
        },
      });
  
      if (response.results.length === 0) {
        console.warn(`⚠️ No post found in Notion for slug: ${slug}`);
        return null;
      }
  
      const page = response.results[0];
  
      return {
        id: page.id,
        title: page.properties.Title?.title[0]?.text.content || "Untitled",
        cover: page.properties.Cover?.files[0]?.file.url || "/default-cover.jpg",
        tags: page.properties.Tags?.multi_select.map(tag => tag.name) || [],
        date: page.properties.Created?.created_time || null,
        content: extractNotionContent(page.properties.Content?.rich_text || []), // ✅ Fix content extraction
      };
    } catch (error) {
      console.error("🚨 Error fetching blog post:", error);
      return null;
    }
  }
  
  // ✅ Function to extract text from Notion rich_text blocks
  function extractNotionContent(richTextArray) {
    return richTextArray.map(block => block.plain_text).join(" ");
  }
  
  
  // Fetch Notion page content
  export async function getNotionPageContent(pageId) {
    const blocks = await notion.blocks.children.list({ block_id: pageId });
    return blocks.results.map((block) =>
      block.paragraph?.rich_text.map((text) => text.text.content).join("") || ""
    ).join("\n\n");
  }


  export async function getRelatedPosts(currentPostSlug, currentPostTags, allPosts) {
    if (!currentPostTags || !Array.isArray(currentPostTags) || currentPostTags.length === 0) {
      console.warn("⚠️ No tags found for current post, returning empty array.");
      return [];
    }
  
    console.log("🔎 Current post tags:", currentPostTags);
    console.log("📌 Total available posts:", allPosts.length);
  
    // Convert `currentPostTags` to lowercase for case-insensitive matching
    const lowerCaseTags = currentPostTags.map(tag => tag.toLowerCase());
  
    let relatedPosts = allPosts.filter((post) => {
      if (!post.tags) {

        console.warn(`⚠️ Post "${post.title}" has no tags.`);
        return false;
      }
  
      // Convert `post.tags` to lowercase
      const postTagsLowerCase = post.tags.map(tag => tag.toLowerCase());
  
      // Check for at least one matching tag (case-insensitive)
      const hasMatchingTag = postTagsLowerCase.some(tag => lowerCaseTags.includes(tag));
  
      if (!hasMatchingTag) {
        console.log(`🔸 Post "${post.title}" has no matching tags.`);
      }
  
      return post.slug !== currentPostSlug && hasMatchingTag;
    });
  
    console.log("✅ Related posts found:", relatedPosts.length);
  
    // Sort by most recent date
    relatedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    // Return up to 4 related posts
    return relatedPosts.slice(0, 4);
  }
  
  
  