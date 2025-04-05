import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import PathologiesPhoto from "../assets/imges/photoForPages/PathologiesPhoto.jpg";
import ScrollToTop from "../Ui/ScrollToTop.tsx";

export default function Pathologies() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <div className="flex gap-2 max-xl:grid max-xl:justify-center">
        <div className="w-[190%] pl-14 pr-14 max-sm:pl-1 max-sm:pr-1 pt-6 pb-4 max-xl:grid max-xl:text-center max-xl:w-full max-xl:justify-center">
          <h4 className="pt-serif-bold text-darkBlue text-2xl pb-4">
            Лікуємо такі захворювання
          </h4>
          <div className="grid gap-4 text-darkGray text-xl">
            <span>
              Гострий коронарний синдром (нестабільна стенокардія та гострий
              інфаркт міокарда)
            </span>
            <span>Хронічний коронарний синдром</span>
            <span>Тромбоемболія легеневої артерії</span>
            <span>
              Складні порушення серцевого ритму та провідності (брадиаритмії,
              тахіаритмії)
            </span>
            <span>Розшаровуюча аневризма грудного відділу аорти</span>
            <span>Інфекційний міокардит, перикардит, ендокардит</span>
            <span>Кардіоміопатії (ДКМП, ГКМП)</span>Гостра та хронічна серцева
            недостатність<span></span>
            <span>Набуті вади серця</span>
          </div>
        </div>
        <div>
          <img
            src={PathologiesPhoto}
            alt="Фото наших лікарів"
            className="h-full object-cover max-xl:w-full"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
