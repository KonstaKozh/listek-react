const navigation = [
   { name: 'Главная', href: '#', current: true },
   { name: 'Сервис', href: '#', current: false },
   { name: 'Документы', href: '#', current: false },
   { name: 'FAQ', href: '#', current: false },
   { name: 'Контакты', href: '#', current: false },
]
function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ')
}

export const NavBar: any = () => {
   return (
      <div className="bg-slate-900">
         <div className="flex container max-w-7xl justify-center items-center mx-auto flex space-x-4">
            {navigation.map((item) => (
               <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                     item.current ? 'bg-gray-900 text-gray-300 underline decoration-solid' : 'text-white hover:bg-gray-700 hover:text-gray-300',
                     'px-3 py-3 rounded-md text-sm uppercase font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
               >
                  {item.name}
               </a>
            ))}
         </div>
      </div>
   )
}