import React from "react";
import {
  editIcon,
  masterSymbol,
  verified,
  dotGroup,
  logoIcon,
} from "../assets/imageExports/exports";

const Details = () => {
  return (
    <div className="lg:w-[65%] md:w-[65%] w-full">
      <header className="lg:flex md:flex xl:flex items-center justify-between flex-initial mb-10 ">
        <div className="flex items-center flex-initial lg:gap-4 md:gap-4 gap-1 xl:gap-4">
          <span className="h-[3em] w-[3em] bg-logoBlue rounded-3xl flex items-center justify-center">
            <img src={logoIcon} alt="logo" className="h-6 w-6" />
          </span>
          <h1 className="text-2xl font-semibold text-logoColor">
            AceCoin<span className="font-light">Pay</span>
          </h1>
        </div>
        <div className="text-lg font-medium gap-[2px] hidden lg:flex md:flex xl:flex">
          <span className="timer-box">0</span>
          <span className="timer-box">1</span>
          <span className="font-bold mx-[2px]">:</span>
          <span className="timer-box">1</span>
          <span className="timer-box">9</span>
        </div>
      </header>
      <section className="form-body">
        <form>
          <div className="input-group">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="capitalize text-logoColor font-bold text-[1.1em] mb-1">
                  card number
                </h2>
                <p className="font-medium text-editColor text-[0.77em]">
                  Enter the 16-digit card number on the card
                </p>
              </div>
              <button
                className="flex items-center justify-between text-lightBlue gap-2"
                type="button"
              >
                <img src={editIcon} alt="edit-icon" className="h-4" />
                <span className="font-medium">Edit</span>
              </button>
            </div>
            <div className="main">
              <img src={masterSymbol} alt="symbol" className="mSymbol" />
              <input
                type="text"
                placeholder="2412   -   7512   -   3412   -   3456"
              />
              <img src={verified} alt="verified" className="trailing-icon" />
            </div>
          </div>

          <div className="input-group __col">
            <div className="">
              <h2 className="capitalize text-logoColor font-bold text-[1.1em] mb-1">
                CVV Number
              </h2>
              <p className="font-medium text-editColor text-[0.77em] lg:block md:block xl:block hidden">
                Enter the 3 or 4 digit number on the card
              </p>
            </div>
            <div className="main">
              <input type="text" placeholder="327" />
              <img src={dotGroup} alt="" className="trailing-icon" />
            </div>
          </div>
          <div className="input-group __col">
            <div>
              <h2 className="capitalize text-logoColor font-bold text-[1.1em] mb-1">
                Expiry Date
              </h2>
              <p className="font-medium text-editColor text-[0.77em] lg:block md:block xl:block hidden">
                Enter the expiration date of the card
              </p>
            </div>
            <div className="grp">
              <div className="main __date">
                <input type="text" placeholder="09" />
              </div>
              <span className="divider">/</span>
              <div className="main __date">
                <input type="text" placeholder="22" />
              </div>
            </div>
          </div>
          <div className="input-group __col">
            <div>
              <h2 className="capitalize text-logoColor font-bold text-[1.1em] mb-1 ">
                Password
              </h2>
              <p className="font-medium text-editColor text-[0.77em] lg:block md:block xl:block hidden ">
                Enter your Dynamic password
              </p>
            </div>
            <div className="main">
              <input type="password" placeholder="******" />
              <img src={dotGroup} alt="" className="trailing-icon" />
            </div>
          </div>
          <button type="button" className="btn-btn">
            pay now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Details;
