import React from "react";
import WelcomePhoto from "../assets/imges/photoForPages/WelcomePhoto.jpg";

export default function Information() {
  return (
    <div className="w-full">
      <div className="flex max-md:grid">
        <div>
          <img src={WelcomePhoto} alt="" className="max-xl:w-[600px] h-full max-2md:w-[500px] max-md:!w-full" />
        </div>
        <div className="bg-darkBlue text-white flex-1 p-8">
          <h3 className="text-4xl">
            <span className="text-yellow">Контактна</span> інформація
          </h3>
          <div className="grid gap-6 text-lg">
            <a
              href="https://maps.app.goo.gl/Tdqc6H85XNWaJ2Fb6"
              target="_blank"
              className="w-fit hover:text-yellow duration-700"
            >
              вулиця Миколи Карнаухова, 25А, Рівне, Рівненська область, Україна,
              33017,
              <br /> хірургічний корпус, 2 поверх.
            </a>
            <a href="tel:+380975542595" className="w-fit hover:text-yellow duration-700">
              Телефон: +380 97 554 25 95
            </a>
            <a href="viber://chat?number=%2B380671651094" className="w-fit hover:text-yellow duration-700">
              Viber: +380 67 165 10 94
            </a>
            <a href="mailto:virtart2018@ukr.net" className="pt-4 w-fit hover:text-yellow duration-700">
              virtart2018@ukr.net
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-yellow"></div>
    </div>
  );
}
