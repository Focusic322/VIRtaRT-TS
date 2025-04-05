import phoneFooter from "../assets/logos/phoneFooter.svg";
import mail from "../assets/logos/mail.svg";
import clock from "../assets/logos/clock.svg";
import DOIC from "../assets/logos/DOIC.png";
import Phone from "../assets/logos/Phone.svg";
import Viber from "../assets/logos/Viber.svg";
import Facebook from "../assets/logos/Facebook.svg";
import Instagram from "../assets/logos/Instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-darkBlue pt-8 max-xl:pl-4 max-xl:pr-4">
            <div className="flex items-center justify-evenly max-xl:grid max-xl:justify-normal  max-xl:gap-4">
        <div className="flex items-center  gap-2 border-purpleBlue border-2 pt-4 pb-4 pr-14 pl-7 rounded-l max-sm:pl-4 max-sm:pr-6">
          <div className="flex justify-center">
            <img
              src={phoneFooter}
              alt="Телефон"
              className="pt-4 pb-4 pr-4 pl-4 bg-blue max-sm:pr-2 max-sm:pl-2 max-sm:pt-2 max-sm:pb-2 max-xss:w-[38px]"
            />
          </div>
          <div className="pt-serif-bold grid items-center text-white ">
            <a
              href="tel:+380975542595"
              className="text-xl hover:text-yellow duration-700"
            >
              +380 97 554 25 95
            </a>
            <span className="text-lg pl-1 max-xss:text-sm ">
              Подзвоніть нам
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 border-purpleBlue border-2 pt-4 pb-4 pr-14 pl-7 rounded-lg max-sm:pl-4 max-sm:pr-6">
          <div className="flex justify-center">
            <img
              src={mail}
              alt="Телефон"
              className="pt-[19px] pb-[19px] pr-[18px] pl-[18px] bg-blue max-sm:pr-2 max-sm:pl-2 max-sm:pt-2 max-sm:pb-2 max-xss:w-10"
            />
          </div>
          <div className="pt-serif-bold grid items-center text-white">
            <a
              href="mailto:virtart2018@ukr.net"
              className="text-xl hover:text-yellow duration-700"
            >
              virtart2018@ukr.net
            </a>
            <span className="text-lg max-xss:text-sm">Напишіть нам</span>
          </div>
        </div>
        <div className="flex items-center gap-2 border-purpleBlue border-2 pt-4 pb-4 pr-14 pl-7 rounded-lg max-sm:pl-4 max-sm:pr-6">
          <div className="flex justify-center">
            <img
              src={clock}
              alt="Телефон"
              className="pt-4 pb-4 pr-4 pl-4 bg-blue max-sm:pr-2 max-sm:pl-2 max-sm:pt-2 max-sm:pb-2  max-xss:w-[38px]"
            />
          </div>
          <div className="pt-serif-bold grid items-center text-white">
            <span className="text-xl">Підтримка 24 / 7 / 365</span>
            <span className="text-lg max-xss:text-sm">
              Завжди надамо допомогу
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center pt-14 text-white pb-14 max-md:grid max-md:!justify-center">
        <div className="max-md:justify-center max-md:flex">
          <img
            src={DOIC}
            alt="Логотип відділення інтервенційної кардіології"
            className="w-[98px] max-lg:w-[88px]"
          />
        </div>
        <div className="grid gap-2 max-md:text-center max-md:justify-center">
          <span className="text-xl">Контакт центр</span>
          <a
            href="tel:+380975542595"
            className="flex items-center gap-2 text-white font-medium text-2xl max-lg:text-lg max-sm:pt-4 hover:opacity-70 duration-700"
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
            className="flex items-center gap-1 text-white font-medium text-2xl max-lg:text-lg max-sm:pt-4 hover:opacity-70 duration-700"
          >
            <img
              src={Viber}
              alt="Логотип Viber"
              className="w-[30px] max-lg:w-[24px]"
            />{" "}
            +380 67 165 10 94
          </a>
        </div>
        <div className="grid items-center gap-6">
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
          <a href="mailto:yaroslav.khveschuk@gmail.com" className="hover:opacity-70 duration-700 max-md:text-sm">Розробник yaroslav.khveschuk@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
