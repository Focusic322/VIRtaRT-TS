import Button from '../Ui/Button.tsx'
import GroupPhoto from "../assets/imges/photoForPages/GroupPhoto.jpg";

export default function Abstract() {
  return (
    <div className='pt-14 flex items-center max-lg:grid'>
        <div className='pr-14 pl-14  max-sm:pl-7 max-sm:pr-7'>
            <h3 className='pt-serif-bold text-4xl text-darkBlue font-medium pb-2'>Про наше<span className='text-yellow'> відділення</span></h3>
            <div className='grid gap-8 text-lg text-darkGray pb-4 '>
                <span >З 02.05.2018 року в КНП ЦМЛ РМР розпочало свою роботу відділення інтервенційної радіології (кардіології) та реперфузійної терапії. Відділення розгорнуто на 10 ліжок з палатою інтенсивної терапії та палатами для хворих перед та після коронарографії. На  даний момент у відділенні функціонують дві рентгенопераційні. Ми надаємо невідкладну  медичну допомогу хворим на гострий коронарний синдром з елевацією сегмента ST в режимі 24/7/365</span>
                <span>Колектив відділення очолює позаштатний міський кардіолог, лікар інтервенційний кардіолог вищої кваліфікаційної категорії Овсійчук Роман Миколайович та старша медична сестра вищої кваліфікаційної категорії Петришина Людмила Костянтинівна</span>
            </div>
            <div className='pb-4'><Button title="Більше про нас" link={"/aboutUs"}/></div>
        </div>
        <div>
            <img src={GroupPhoto} alt="Групове фото" className='w-[3200px] rounded-2xl max-md:rounded-none'/>
        </div>
    </div>
  )
}
