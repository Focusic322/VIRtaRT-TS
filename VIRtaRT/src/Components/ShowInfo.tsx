import serviceData from "../data/services";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router";
import ScrollToTop from "../Ui/ScrollToTop";

export default function ShowInfo() {
  const { id } = useParams();
  const numericId = parseInt(id ?? '', 10);

  if (isNaN(numericId)) {
    return (
      <h2 className="text-2xl text-center text-darkBlue font-medium pt-14">
        Невірний ідентифікатор послуги
      </h2>
    );
  }

  const service = serviceData.find((item) => item.id === numericId);

  if (!service) {
    return (
      <h2 className="text-2xl text-center text-darkBlue font-medium pt-14">
        Послугу не знайдено
      </h2>
    );
  }

  return (
    <div className="flex flex-col ">
      <Header />
      <ScrollToTop />
      <div className="pt-6 pr-2 pl-2 max-xl:px-0">
        <div className="grid w-full pl-14 max-md:pl-0 pr-14 max-md:pr-0 pt-6 max-xl:text-center max-xl:w-full max-xl:px-4 justify-items-center">
          <h3 className="pt-serif-bold text-darkBlue text-2xl pb-4 text-center">
            Детальна інформація
          </h3>
          <div className="text-darkGray text-xl text-center max-xss:text-lg">
            <div>
              <h3 className="text-darkBlue text-xl font-semibold">{service.titleShow}</h3>
              <p>{service.shows}</p>
            </div>
            <div className="pt-4">
              <h3 className="text-darkBlue text-xl font-semibold">{service.titlePreparation}</h3>
              <p>{service.preparation}</p>
            </div>
            <div className="pt-4">
              <h3 className="text-darkBlue text-xl font-semibold">{service.titleTime}</h3>
              <p>{service.time}</p>
            </div>
            <div className="pt-4">
              <h3 className="text-darkBlue text-xl font-semibold">{service.titleRehabilitaion}</h3>
              <p>{service.rehabilitation}</p>
            </div>
            <div className="pt-4">
              <h3 className="text-darkBlue text-xl font-semibold">{service.titleLimitations}</h3>
              <p>{service.limitations}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-4">
      <img src={service.showImg} alt={`Фото ${service.title}`} className="w-[950px] h-[550px] rounded-2xl max-2md:rounded-none max-2md:h-full pt-2 object-cover"/>
      </div>
      <Footer />
    </div>
  );
}
