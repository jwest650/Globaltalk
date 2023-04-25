import React from "react";
import { createPortal } from "react-dom";

const Modal = () => {
     return createPortal(
          <div className="h-screen  absolute left-0 bottom-0 top-14 right-0 bg-[#E0E0E0]">
               <main className="flex flex-col justify-center items-center h-screen capitalize space-y-7">
                    <span className="font-bold">main</span>
                    <span>textbook</span>
                    <span>statistics</span>
                    <span>sprint</span>
                    <span>audio call</span>
               </main>
          </div>,
          document.body
     );
};

export default Modal;
