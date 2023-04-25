import Image from "next/image";
import React from "react";

const Statistics = () => {
     return (
          <main className="flex flex-wrap items-center p-7 items-center justify-center">
               <div className="relative  w-[100%] md:w-[30%]  h-[400px]">
                    <Image
                         alt="reading"
                         src={"/assests/secImage.png"}
                         fill
                         objectFit="contain"
                    />
               </div>

               <div className="space-y-4 ">
                    <h1 className="leading-[56px]">
                         Watch your <br /> progress every <br />
                         day
                    </h1>
                    <p>
                         save statistics on your achievements, <br /> words
                         learnt and mistakes
                    </p>
                    <button className="bg-[#C3DCE3] p-1 px-3 capitalize rounded-full text-[#2B788B] font-bold">
                         statistics
                    </button>
               </div>
          </main>
     );
};

export default Statistics;
