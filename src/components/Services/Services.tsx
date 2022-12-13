import {data} from './data'

export const Services: any = () => {
   const myData = data
   // @ts-ignore
   return (
      <div className='container max-w-7xl flex flex-col items-center mx-auto'>
         <span className='px-3 py-3 rounded-md text-sm text-[#000080] uppercase font-medium'>Комплекс ремонтных услуг</span>
         <h2 className='mb-8 text-[42px] font-bold'>Основные направления компании</h2>
         <div className='flex flex-wrap justify-between gap-6'>
            {myData.map((item) => {
               const {id, image, title, text} = item
               return <div className='px-3 py-3 flex flex-[1_1_33%] flex-col gap-3.5 items-center border border-[#ebebeb] rounded text-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]' key={id}>
                  <img className='h-24' src={image}  alt={title} />
                  <h3 className='text-lg font-bold'>{title}</h3>
                  <p className=''>{text}</p>
               </div>
            })}
         </div>
      </div>
   )
}