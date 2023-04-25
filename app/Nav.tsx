import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Modal from "./Modal";
const Nav = ({ setshowmodal, showmodal }) => {
     return (
          <main className="flex items-center justify-around  border-b border-[#BABABA] p-3 capitalize bg-[#E0E0E0] text-sm">
               {showmodal && <Modal />}

               <div
                    className="md:hidden block cursor-pointer "
                    onClick={() => setshowmodal(!showmodal)}
               >
                    <HiOutlineMenuAlt2 className="text-xl" />
               </div>
               <div className="flex items-center space-x-10">
                    <h1 className="font-bold text-lg">GlobalTalk</h1>
                    <aside className="space-x-6 text-[#585858] hidden md:block">
                         <span className="font-bold">Home</span>
                         <span>Textbook</span>
                         <span>Statistics</span>
                         <span>Games</span>
                    </aside>
               </div>

               <div className="flex items-center space-x-5">
                    <aside className="flex items-center space-x-1">
                         <div className="bg-[#C3DCE3] h-[30px] w-[30px] rounded-full flex justify-center items-center">
                              <span>A</span>
                         </div>
                         <span>alex</span>
                    </aside>

                    <div className=" items-center md:flex hidden">
                         <span> sign out</span>{" "}
                         <span>
                              <BsArrowRightShort />
                         </span>
                    </div>
               </div>
          </main>
     );
};

export default Nav;
