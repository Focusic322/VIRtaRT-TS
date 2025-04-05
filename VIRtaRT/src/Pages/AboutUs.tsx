import Header from '../Components/Header.tsx'
import Footer from "../Components/Footer.tsx";
import WorkPhoto from "../assets/imges/photoForPages/WorkPhoto.jpg";
import ScrollToTop from '../Ui/ScrollToTop.tsx';


export default function AboutUs() {
  return (
    <div>
        <Header />
        <ScrollToTop />
        <div className='flex items-center rounded-3xl gap-2 max-xl:grid max-xl:justify-center'>
          <div className='w-[90%] pl-14 pr-14  max-sm:pl-1  max-sm:pr-1 pt-6 pb-4 max-xl:grid max-xl:text-center max-xl:w-full max-xl:justify-center'>
            <h4 className='pt-serif-bold text-darkBlue text-2xl pb-4'>Загальна інформація</h4>
            <div className='grid gap-4 text-darkGray text-xl'>
              <span>З 02.05.2018 року в КНП ЦМЛ РМР розпочало свою роботу відділення інтервенційної радіології (кардіології) та реперфузійної терапії. Відділення розгорнуто на 10 ліжок з палатою інтенсивної терапії та палатами для хворих перед та після коронарографії. На  даний момент у відділенні функціонують дві рентгенопераційні. Ми надаємо невідкладну  медичну допомогу хворим на гострий коронарний синдром з елевацією сегмента ST в режимі 24/7/365.</span>
              <span>Колектив відділення очолює позаштатний міський кардіолог, лікар інтервенційний кардіолог вищої кваліфікаційної категорії Овсійчук Роман Миколайович та старша медична сестра вищої кваліфікаційної категорії Петришина Людмила Костянтинівна.</span>
              <span>Лікарський штат відділення об’єднує кардіологів палати інтенсивної терапії, інтервенційних кардіологів, кардіологів-електрофізіологів та лікарів функціональної діагностики, які цілодобово забезпечують надання невідкладної медичної допомоги.</span>
              <span>До послуг наших пацієнтів прогресивні медичні технології, сучасні методики лікування та операційне обладнання, що відповідає сучасним медичним вимогам, санітарно-гігієнічним нормам, а також міжнародним стандартам, що забезпечують проведення планових та ургентних операцій.</span>
            </div>
          </div>
          <div>
            <img src={WorkPhoto} alt="Фото екранів" className='rounded-xl max-xl:w-full'/>
          </div>
        </div>
        <div>
        </div>
        <Footer />
    </div>
  )
}
