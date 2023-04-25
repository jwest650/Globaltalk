import Image from "next/image";
import React from "react";

const Vocabulary = () => {
     return (
          <main className="flex flex-wrap bg-[#E0E0E0] justify-center items-center p-7">
               <div className="space-y-4">
                    <h1 className="leading-[56px] ">
                         Increase your <br /> vocabulary
                    </h1>
                    <p>
                         traditional and new effective approach to <br /> word
                         study
                    </p>
                    <button className="bg-[#C3DCE3] p-1 px-3 capitalize rounded-full text-[#2B788B] font-bold">
                         textbook
                    </button>
               </div>
               <div className="relative  w-[100%] md:w-[50%]  h-[400px]">
                    <Image
                         alt="reading"
                         src={"/assests/lastImage.png"}
                         fill
                         objectFit="contain"
                    />
               </div>
          </main>
     );
};

export default Vocabulary;
