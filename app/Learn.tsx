import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
const Learn = () => {
     return (
          <main className="flex items-center p-7 flex-wrap justify-center">
               <div className="relative w-[100%] md:w-[50%]  h-[400px]">
                    <Image
                         alt="reading"
                         src={"/assests/thirdImage.png"}
                         fill
                         objectFit="contain"
                    />
               </div>
               <div className="space-y-3">
                    <h1 className=" leading-[56px] ">
                         Learn a language <br /> in a playful way
                    </h1>
                    <p className="">
                         make learning words more fun with mini <br /> games
                    </p>
                    <aside className="flex items-center space-x-4 pt-5">
                         <div className="w-32 h-20 bg-[#F2D4DC] relative rounded">
                              <Image
                                   alt="reading"
                                   src={"/assests/meg1-removebg-preview.png"}
                                   width={70}
                                   height={20}
                                   objectFit="contain"
                                   className="absolute  -top-4 left-[15px]  "
                              />
                              <div className="flex items-center absolute bottom-0 left-[20px]">
                                   <p className="text-[#945069] font-bold">
                                        {" "}
                                        Audio call
                                   </p>
                                   <span>
                                        {" "}
                                        <BsArrowRightShort />
                                   </span>
                              </div>
                         </div>
                         <div className="w-32 h-20 bg-[#C3DCE3] relative rounded">
                              <Image
                                   alt="reading"
                                   src={
                                        "/assests/background-red-retro-model-tennis-removebg-preview.png"
                                   }
                                   width={100}
                                   height={20}
                                   objectFit="contain"
                                   className="absolute  -top-4 left-[15px]  "
                              />
                              <div className=" flex items-center absolute bottom-0 left-[40px]">
                                   <p className="text-[#2b788b] font-bold">
                                        {" "}
                                        Sprint
                                   </p>
                                   <span>
                                        {" "}
                                        <BsArrowRightShort />
                                   </span>
                              </div>
                         </div>
                    </aside>
               </div>
          </main>
     );
};

export default Learn;
