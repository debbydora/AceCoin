import React from "react";
import { close } from "../assets/imageExports/exports";
import Details from "../components/Details";
import Checkout from "../components/Checkout";

const Home = () => {
  return (
    <div className="flex md:flex-row lg:flex-row flex-col gap-10 wrapper w-full justify-between">
      <div className="absolute z-[99] top-4 right-4 cursor-pointer">
        <img src={close} alt="close-btn" className="h-[1.5em]" />
      </div>
      <Details />
      <Checkout />
    </div>
  );
};

export default Home;
