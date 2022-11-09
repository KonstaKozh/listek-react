import {data} from './data'

export const Services: any = () => {
   const myData = data
   // @ts-ignore
   return (
      <div>
         <span>Комплекс ремонтных услуг</span>
         <h2>Основные направления деятельности</h2>
         <div>
            {myData.map((item) => {
               const {id, image, title, text} = item
               return <div key={id}>
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>{text}</p>
               </div>
            })}
         </div>
      </div>
   )
}