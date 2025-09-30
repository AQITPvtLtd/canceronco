"use client";
import { useEffect, useState } from "react";
import TopBar from "./Top";
import Navbar from "./Navbar";

export default function Header() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TopBar sirf desktop par */}
      {!isMobile && <TopBar isVisible={showTopBar} />}
      <Navbar top={!isMobile && showTopBar ? "3.5rem" : "0"} />
    </>
  );
}
