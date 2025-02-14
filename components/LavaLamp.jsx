"use client";


const LavaLamp = () => {
    return (
        <div className="bg-gradient-to-b from-[#2e294e] to-black absolute top-0 left-0 w-full h-full overflow-hidden">
            {/* First Blob (Top Left) */}
            <div className="lava-lamp one" style={{ left: "5%", top: "7%" }}></div>

            {/* Second Blob (Far Right) */}
            <div className="lava-lamp two" style={{ left: "75%", top: "15%" }}></div>

            {/* Third Blob (Bottom Left) */}
            <div className="lava-lamp three" style={{ left: "20%", top: "20%" }}></div>
        </div>
    );
};

export default LavaLamp;
