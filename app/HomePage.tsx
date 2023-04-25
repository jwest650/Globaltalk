"use client";
import Image from "next/image";
import React from "react";
import { ImPlus } from "react-icons/im";
import { BsLightningFill } from "react-icons/bs";
import { MdVideogameAsset } from "react-icons/md";
const HomePage = () => {
     return (
          <main className="flex flex-wrap bg-[#E0E0E0] justify-center items-center md:items-start p-7">
               <div className=" space-y-4 ">
                    <p className={`text-[#2B788B] capitalize  font-bold `}>
                         E course learning plartform
                    </p>
                    <h2 className="text-[56px]  leading-[56px] ">
                         Learning and <br /> teaching online, <br /> made easy.
                    </h2>
                    <p>
                         Practice your english and learn new things <br /> with
                         the platform
                    </p>

                    <button className="bg-[#C3DCE3] p-1 px-3 capitalize rounded-full text-[#2B788B] font-bold">
                         about platform
                    </button>
                    <aside className="flex space-x-10 items-center ">
                         <div className="text-center">
                              <aside className="flex items-center">
                                   <BsLightningFill
                                        color="#2B788B"
                                        className="mr-1"
                                   />

                                   <h2>600</h2>
                                   <ImPlus color="#2B788B" />
                              </aside>
                              <small>popular words</small>
                         </div>
                         <div className="h-[60px] w-[1px] border border-[#BABABA]" />
                         <div className="text-center">
                              <aside className="flex items-center">
                                   <MdVideogameAsset
                                        color="#2B788B"
                                        className="mr-1"
                                   />
                                   <h2>2</h2>
                                   <ImPlus color="#2B788B" />
                              </aside>
                              <small>mini games</small>
                         </div>
                    </aside>
               </div>

               <div className="relative w-[100%] md:w-[35%]  h-[400px]">
                    <Image
                         src={"/assests/mainImage.png"}
                         fill
                         objectFit="contain"
                    />
               </div>
          </main>
     );
};

export default HomePage;
