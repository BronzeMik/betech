/** @type {import('next').NextConfig} */
const nextConfig = {
   compress: true,
   images: {
    domains: ['heroui.com'],
    formats: ["image/avif", "image/webp", "image/png", "image/jpeg", "image/jpg", "image/svg+xml", "image/gif", "image/tiff"],
   },
};

export default nextConfig;
