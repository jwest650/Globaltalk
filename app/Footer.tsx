import React from "react";
import { DiGithubAlt } from "react-icons/di";
import { AiFillYoutube } from "react-icons/ai";
import { RiKakaoTalkLine } from "react-icons/ri";
const Footer = () => {
     return (
          <main className="bg-[#f6f5f4]   py-4 capitalize">
               <div className="w-[80%] mx-auto ">
                    <aside className="flex flex-wrap items-center  justify-between border-b  py-3">
                         <div className="space-x-4">
                              <span>Home</span>
                              <span>Statistics</span>
                              <span>Textbook</span>
                              <span>Audio call</span>
                              <span>Sprint</span>
                         </div>

                         <div className="space-x-4">
                              <span>Alex</span>
                              <span>Gabriel</span>
                              <span>Marcus</span>
                         </div>
                    </aside>

                    <aside className="flex flex-wrap items-center  justify-between  py-3">
                         <div className="space-x-4 flex items-center ">
                              <DiGithubAlt className="text-2xl" />
                              <RiKakaoTalkLine />
                              <AiFillYoutube />
                         </div>

                         <div>
                              <p>
                                   &copy; 2021 global talk, project for global
                                   talk
                              </p>
                         </div>
                    </aside>
               </div>
          </main>
     );
};

export default Footer;
