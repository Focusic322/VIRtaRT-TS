import { useState, useEffect } from "react";
import logo from "../assets/logos/logo.svg";
import DOIC from "../assets/logos/DOIC.png";
import Facebook from "../assets/logos/Facebook.svg";
import Instagram from "../assets/logos/Instagram.svg";
import Viber from "../assets/logos/Viber.svg";
import Phone from "../assets/logos/Phone.svg";
import { Link } from "react-router";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open == false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="pt-10 pt-serif-regular">
      {open ? (
        <div className="fixed z-40 w-full h-full top-0 left-0 flex items-center justify-center bg-darkBlue">
          <ul className="flex flex-col items-center gap-6">
            <li className="text-2xl text-white">
              <Link to="/">Головна сторінка</Link>
            </li>
            <li className="text-2xl text-white">
              <Link to="/aboutUs">Про нас</Link>
            </li>
            <li className="text-2xl text-white">
              <Link to="/doctors">Лікарі</Link>
            </li>
            <li className="text-2xl text-white">
              <Link to="/pathologies">Патології</Link>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="flex items-center justify-between max-xss:grid max-xss:justify-center max-xss:gap-2 pl-14 pr-14 max-xss:pl-7 max-xss:pr-7">
        <div className="flex items-center">
          <button
            onClick={handleClick}
            className="hidden max-sm:grid pr-4 pt-2 z-50"
          >
            <div
              className={
                open
                  ? "h-[2px] w-6 mb-2 bg-black  rotate-[135deg] translate-y-[15px] duration-300"
                  : "rotate-0 duration-500"
              }
            >
              <div className="h-[2px] w-6 mb-2 bg-black"></div>
            </div>
            <div
              className={
                open
                  ? "h-[2px] w-6 mb-2 bg-black -translate-x-4 duration-700 opacity-0"
                  : "translate-x-0 duration-700 opacity-100"
              }
            >
              <div className="h-[2px] w-6 mb-2 bg-black"></div>
            </div>
            <div
              className={
                open
                  ? "h-[2px] w-6 mb-2 bg-black rotate-[45deg] -translate-y-[5px] duration-300"
                  : "rotate-0 duration-500"
              }
            >
              <div className="h-[2px] w-6 mb-2 bg-black"></div>
            </div>
          </button>
          <img
            src={logo}
            alt="Логотип центральної міської лікарні міста Рівного"
            className="w-[188px] max-lg:w-[168px]"
          />
          <img
            src={DOIC}
            alt="Логотип відділення інтервенційної кардіології"
            className="w-[78px] max-lg:w-[68px]"
          />
        </div>
        <div className="flex items-center gap-2 max-md:grid">
          <h4 className="text-darkBlue text-lg font-medium max-md:text-sm max-sm:hidden">
            Слідкуйте за нами в соціальних мережах:
          </h4>
          <ul className="flex items-center gap-2 max-md:justify-center">
            <li>
              <a
                href="https://www.facebook.com/virtartcml"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Facebook}
                  alt="Логотип Facebook"
                  className="hover:opacity-70 duration-700 max-lg:w-[36px]"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/interventional_card.rv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  alt="логотип Instagram"
                  className="hover:opacity-70 duration-700 max-lg:w-[36px]"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between pt-8 pb-4 max-xl:grid max-xl:text-center max-xl:justify-center pl-14 pr-14 max-xss:pl-7  max-xss:pr-7">
        <div>
          <h2 className="text-darkBlue font-medium text-3xl max-lg:text-2xl max-xss:!text-xl">
            Відділення інтервенційної радіології та реперфузійної терапії
          </h2>
          <span className="text-darkBlue font-sans text-lg">Центральна міська лікарня</span>
        </div>
        <div className="grid items-center gap-2 max-xl:justify-center">
          <a
            href="tel:+380975542595"
            className="flex items-center gap-2 text-darkBlue font-medium text-2xl max-lg:text-lg max-sm:pt-4 hover:opacity-70 duration-700"
          >
            <img
              src={Phone}
              alt="Телефон"
              className="w-[24px] max-lg:w-[18px]"
            />
            +380 97 554 25 95
          </a>
          <a
            href="viber://chat?number=%2B380671651094"
            className="flex items-center gap-1 text-darkBlue font-medium text-2xl max-lg:text-lg max-sm:pt-4 hover:opacity-70 duration-700"
          >
            <img
              src={Viber}
              alt="Логотип Viber"
              className="w-[30px] max-lg:w-[24px]"
            />{" "}
            +380 67 165 10 94
          </a>
        </div>
      </div>
      <div className="bg-darkBlue justify-center">
        <ul className="flex justify-around items-center pl-4 pr-4 pt-8 pb-8 max-sm:hidden">
          <li className="text-xl text-white hover:text-yellow duration-700">
            <Link to="/">Головна сторінка</Link>
          </li>
          <li className="text-xl text-white hover:text-yellow duration-700">
            <Link to="/aboutUs">Про нас</Link>
          </li>
          <li className="text-xl text-white hover:text-yellow duration-700">
            <Link to="/doctors">Лікарі</Link>
          </li>
          <li className="text-xl text-white hover:text-yellow duration-700">
            <Link to="/pathologies">Патології</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
