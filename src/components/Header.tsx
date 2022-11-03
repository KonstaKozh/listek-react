import logoUrl from '../img/Listek_logo_1.png'
import clockUrl from '../img/clock.svg'
import phoneUrl from '../img/phone.svg'
import mailUrl from '../img/email.svg'
import telegramUrl from '../img/telegram.svg'

export const Header: any = () => {
   return (
      <div className="container p-4 max-w-7xl items-center mx-auto flex">
         <div>
            <img className="h-10 w-100" src={logoUrl} alt='logo_listek'/>
         </div>
         <div className="flex items-center">
            <svg width="18" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 1a9.002 9.002 0 0 0-6.366 15.362c1.63 1.63 5.466 3.988 5.693 6.465.034.37.303.673.673.673.37 0 .64-.303.673-.673.227-2.477 4.06-4.831 5.689-6.46A9.002 9.002 0 0 0 12 1z" fill="#F43"></path>
               <path d="M12 13.079a3.079 3.079 0 1 1 0-6.158 3.079 3.079 0 0 1 0 6.158z" fill="#fff"></path>
            </svg>
            <span>г. Самара, ул. Победы, д.141, оф.1</span>
         </div>
         <div className="flex items-center">
            <img className="w-5" src={clockUrl} alt="clock"/>
            <span>пн-пт 9:00-18:00 сб 10:00-16:00</span>
         </div>
         <div className="flex items-center">
            <img className="w-5" src={phoneUrl} alt="clock"/>
            <div className="flex flex-col">
               <span>8-846-996-97-34</span>
               <span>8-846-996-97-34</span>
               <span>8-846-996-97-34</span>
            </div>
         </div>
         <div>
            <div className="flex items-center">
               <img className="w-5" src={mailUrl} alt="clock"/>
               <a href={`mailto:listek-ltd@yandex.ru`}>listek-ltd@yandex.ru</a>
            </div>
            <div className="flex items-center">
               <img className="w-5" src={telegramUrl} alt="clock"/>
               <a href={`tg://resolve?domain=listek_63/`}>@listek</a>
            </div>
         </div>
      </div>
   )
}