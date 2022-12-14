import logoUrl from '../img/Listek_logo_1.png'
import clockUrl from '../img/clock.svg'
import phoneUrl from '../img/phone.svg'
import mailUrl from '../img/email.svg'
import telegramUrl from '../img/telegram.svg'

export const Header: any = () => {
   return (
      <div className="container p-4 max-w-7xl justify-between items-center mx-auto flex">
         <div className="flex flex-initial" >
            <img className="h-10 w-100" src={logoUrl} alt='logo_listek'/>
         </div>
         <div className="flex items-center">
            <svg className="mr-1" width="14" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 1a9.002 9.002 0 0 0-6.366 15.362c1.63 1.63 5.466 3.988 5.693 6.465.034.37.303.673.673.673.37 0 .64-.303.673-.673.227-2.477 4.06-4.831 5.689-6.46A9.002 9.002 0 0 0 12 1z" fill="#F43"></path>
               <path d="M12 13.079a3.079 3.079 0 1 1 0-6.158 3.079 3.079 0 0 1 0 6.158z" fill="#fff"></path>
            </svg>
            <a href={'#'}>г. Самара, ул. Победы, д.141, оф.1</a>
         </div>
         <div className="flex items-start">
            <img className="w-5 mr-1" src={clockUrl} alt="clock"/>
             <div className="flex flex-col items-end text-sm leading-tight">
                 <span>пн-пт 9:00-18:00</span>
                 <span>сб 10:00-16:00</span>
             </div>
         </div>
         <div className="flex items-start">
            <img className="w-5 mr-1" src={phoneUrl} alt="clock"/>
            <div className="flex flex-col text-sm leading-tight">
               <span>8-846-996-97-34</span>
               <span>8-846-996-97-34</span>
               <span>8-846-996-97-34</span>
            </div>
         </div>
         <div className="flex flex-col items-end">
            <div className="flex items-center">
               <img className="w-5 mr-1" src={mailUrl} alt="clock"/>
               <a href={`mailto:listek-ltd@yandex.ru`}>listek-ltd@yandex.ru</a>
            </div>
            <div className="flex items-center">
               <img className="w-5 mr-1" src={telegramUrl} alt="clock"/>
               <a href={`tg://resolve?domain=listek_63/`}>@listek</a>
            </div>
         </div>
      </div>
   )
}