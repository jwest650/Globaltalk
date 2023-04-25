"use client";
import { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import Nav from "./Nav";
import HomePage from "./HomePage";
import Learn from "./Learn";
import Vocabulary from "./Vocabulary";
import Statistics from "./Statistics";
import Footer from "./Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
     const [showmodal, setshowmodal] = useState(false);
     useEffect(() => {
          window.addEventListener("resize", () => {
               if (showmodal && window.innerWidth > "768") {
                    setshowmodal(false);
               }
          });
     });

     return (
          <main className={montserrat.className}>
               <div
                    className={`${
                         showmodal ? " h-screen overflow-hidden" : ""
                    }  `}
               >
                    <Nav setshowmodal={setshowmodal} showmodal={showmodal} />
                    <HomePage />
                    <Learn />
                    <Vocabulary />
                    <Statistics />
                    <Footer />
               </div>
          </main>
     );
}
