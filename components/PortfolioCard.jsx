import React from "react";

const PortfolioCard = ({img, description, viewLive}) => {
  return (
    <div className="border border-[#2e294e] rounded-lg shadow-sm shadow-[#2e294e] hover:shadow-lg hover:shadow-[#21FA90]">
      <div>
        {/* Image */}
        <div className="w-full h-[200px] rounded-t-lg" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition:'center'}}></div>

        {/* Description */}
        <div className="bg-[] text-center  px-4">
          <p className="text-white text-justify py-8">
            {description}
          </p>

          {/* CTA */}
          <div className="w-full flex gap-2 justify-center mb-6">
            {viewLive && <a className="bg-[#21FA90] px-4 py-2 uppercase cursor-pointer" href={viewLive}>View Project</a>}
            <a className="bg-white px-4 py-2 uppercase cursor-pointer" href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
