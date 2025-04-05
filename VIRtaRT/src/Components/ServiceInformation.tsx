import ScrollToTop from "../Ui/ScrollToTop";
import Button from "../Ui/Button.tsx";
import serviceData from "../data/services";
import { useParams, useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function ServiceInformation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const numericId = parseInt(id ?? '', 10);

  if (isNaN(numericId)) {
    return (
      <h2 className="text-2xl text-center text-darkBlue font-medium pt-14">
        Невірний ідентифікатор процедури
      </h2>
    );
  }

  const service = serviceData.find((doc) => doc.id === numericId);

  if (!service) {
    return (
      <h2 className="text-2xl text-center text-darkBlue font-medium pt-14">
        Процедуру не знайдено
      </h2>
    );
  }

  const handleShowDetails = () => {
    if (service.route) {
      navigate(service.route);
    }
  };

  return (
    <div className="flex flex-col">
      <Header />
      <ScrollToTop />
      <div className="flex pt-6 pb-10 pr-2 pl-2 items-center gap-2 max-xl:flex-col max-xl:pt-2 max-xl:px-0">
        <div className="grid w-[100%] pl-14 max-md:pl-0 pr-14 max-md:pr-0 pt-6 max-xl:text-center max-xl:w-full max-xl:px-4 justify-items-center">
          <h3 className="pt-serif-bold text-darkBlue text-2xl pb-4 text-center">
            Детальна інформація
          </h3>
          <span className="text-darkGray text-xl text-center">
            {service.details}
          </span>
          <div className="w-full pt-6">
            {service.hasShow === true ? (
              <Button title="Підготовка і покази" onClick={handleShowDetails} />
            ) : null}
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-[550px] max-xl:h-[300px] max-sm:h-[200px] max-xl:px-4">
          <img
            src={service.img}
            alt={`Фото процедури ${service.title}`}
            className="object-cover w-full h-full rounded-lg m-0"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}