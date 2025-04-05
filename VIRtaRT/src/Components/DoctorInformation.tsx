import { useParams } from "react-router";
import doctorsData from "../data/doctors.ts";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import ScrollToTop from "../Ui/ScrollToTop.tsx";

export default function DoctorInformation() {
  const { id } = useParams();
  const doctor = doctorsData.find((doc) => Number(doc.id) === Number(id));

  if (!doctor) {
    return <h2>Лікаря не знайдено</h2>;
  }

  return (
    <div>
      <Header />
      <ScrollToTop />
      <div className="flex items-center pb-8 gap-8 max-xl:grid max-xl:justify-center max-xl:text-center">
        <div className="grid gap-4 text-center pr-14 pl-14 pt-8 pb-8 max-sm:pl-7 max-sm:pr-7 items-center max-xl:pb-0">
          <div className="flex justify-center w-full">
            <img
              src={doctor.img}
              alt={`Фото ${doctor.title}`}
              className="w-[250px] rounded-md "
            />
          </div>
          <h4 className=" pt-serif-bold text-xl text-darkBlue">
            {doctor.title}
          </h4>
          <span className="text-lg text-darkGray ">{doctor.speciality}</span>
        </div>
        <div className="grid pt-14 gap-4 w-1/2 max-xl:w-full max-xl:justify-center max-xl:pt-0">
          <div className="">
            <h4 className="text-darkBlue text-xl font-medium">Інформація</h4>
            <div className="text-lg text-darkGray font-serif">
              {doctor.details}
            </div>
          </div>
          <div className="">
            <h4 className="text-darkBlue text-xl font-medium">Освіта</h4>
            <div className="text-lg text-darkGray font-serif">
              {doctor.educationInfo}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
