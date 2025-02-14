import PortfolioCard from '@/components/PortfolioCard'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='pt-14 md:pt-32 bg-[#141122]'>

      {/* Hero */}
      <div className='w-full h-[400px] flex flex-col justify-center items-center'>
        <h2 className='text-white text-3xl md:text-6xl uppercase tracking-wider font-bold'>Our Portfolio</h2>
        <p className='text-white'>Check out our featured projects</p>
      </div>


      {/* Portfolio Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-14 px-4 md:px-8 pb-28 '>
            <PortfolioCard
            img={'project4.png'}
            description={<>This sleek and conversion-focused marketing landing page was designed to drive engagement and boost conversions. Built with a modern UI, compelling CTAs, and optimized for performance, it effectively highlights key offerings while maintaining a seamless user experience. Whether for product launches or lead generation, this page is designed to maximize impact. </>}
            viewLive={'https://stanleytismarketing.netlify.app/'}
            />

            <PortfolioCard
            img={'project3.png'}
            description={<>This cloud hosting platform mockup showcases a sleek, scalable, and secure solution for modern businesses. Designed with a user-friendly interface, it highlights key features like seamless deployment, high availability, and performance optimization. Built to simulate real-world cloud infrastructure, this project demonstrates efficient resource management and a streamlined hosting experience. </>}
            viewLive={'https://rubixcubes.netlify.app/'}
            />

            <PortfolioCard
            img={'project2.png'}
            description={<>This T-Shirt Customizer Website offers a seamless and interactive way to design personalized apparel. With a user-friendly interface, real-time previews, and customization options for colors, text, and graphics, users can create unique designs effortlessly. Built for smooth performance and an engaging experience, this project showcases the power of intuitive UI and modern web technologies. </>}
            viewLive={'https://custom-shirts.netlify.app/'}
            />

            <PortfolioCard
            img={'project6.png'}
            description={<>This Simple Expense Tracker is designed to help users manage their finances effortlessly. With an intuitive interface, users can log expenses, categorize spending, and track their budget in real-time. Built for simplicity and efficiency, this application ensures a smooth experience for anyone looking to stay on top of their finances with ease. </>}
            viewLive={'https://easy-expense-tracking.vercel.app/'}
            />

            <PortfolioCard
            img={'project7.png'}
            description={<>This File Manager Website provides a seamless way to organize, upload, and manage files securely. With an intuitive UI, drag-and-drop functionality, and cloud storage integration, users can easily access their documents from anywhere. Designed for efficiency and ease of use, this project demonstrates modern web technologies for effective file management. </>}
            viewLive={'https://my-file-manager-lemon.vercel.app/'}
            />

            <PortfolioCard
            img={'project8.png'}
            description={<>This Home Services Template is designed for businesses offering maintenance, repairs, and professional services. Featuring a clean and modern layout, it includes service listings, booking options, and customer testimonials to enhance user engagement. Optimized for responsiveness and performance, this template provides a seamless experience for clients looking to connect with trusted service providers. </>}
            viewLive={'https://homeservicesco.netlify.app/'}
            />

            <PortfolioCard
            img={'project9.png'}
            description={<>This Appliance Repair Landing Page is designed to connect customers with reliable repair services quickly and efficiently. With a clean layout, clear service offerings, and a simple booking system, users can easily schedule repairs for their appliances. Optimized for speed and mobile responsiveness, this landing page enhances user experience and boosts conversions. </>}
            viewLive={'https://theyfixappliances.com/'}
            />

            <PortfolioCard
            img={'project10.jfif'}
            description={<>This Pizza Website is a visually appealing and user-friendly platform designed for online ordering and menu browsing. Featuring a modern UI, interactive menu, and seamless checkout process, it provides an effortless ordering experience. Optimized for responsiveness and speed, this project showcases a sleek and engaging way to bring a pizzeria online.</>}
            viewLive={'https://github.com/BronzeMik/super-pizza'}
            />

            <PortfolioCard
            img={'AI_Resume_Analyzer_screenshot.png'}
            description={<>This AI Resume Analyzer helps job seekers optimize their resumes with intelligent insights and feedback. Using AI-powered analysis, it evaluates key factors like formatting, keyword relevance, and readability to improve hiring potential. With a sleek and user-friendly interface, this tool simplifies the resume enhancement process, making job applications more effective. </>}
            viewLive={'https://resume-analyzer-ai.netlify.app/'}
            />
            
        </div>
    </div>
  )
}

export default Portfolio
