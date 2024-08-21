import logo from '../assets/logo.png'

export function Header() {
    return (
        <div className='relative flex items-center justify-center h-[120px] w-full '>
            <div className='h-[120px] absolute left-0'>
                <img src={logo} alt="logo-as13" className="w-[350px] h-[150px] translate-x-[-3rem] -rotate-[10deg] hover:scale-125 hover:cursor-pointer transition-all" />
            </div>
            <h1 className=" text-black font-bold text-[2rem] font-serif text-5xl">Ahora son 13</h1>
            <nav className='absolute right-0'>
                <ul className="flex gap-x-3 w-[max-content] text-black text-[1.2rem] ">
                    <li className='relative group'>
                        <h3 className='hover:cursor-pointer hover:text-[rgb(250,233,104)] transition-all w-[max-content]'>Productos</h3>
                        <div className='absolute hidden flex-col text-left group-hover:flex transition-all h-[max-content] p-[.5rem] bg-[#dd992b] rounded-xl text-[1rem]'>
                            <a href='#' className='hover:text-yellow-200'>Stocks</a>
                            <a href='#' className='hover:text-yellow-200'>Proveedores</a>
                        </div>
                    </li>
                    <li className='relative group'>
                        <h3 className='hover:cursor-pointer hover:text-[rgb(254,240,138)] transition-all w-[max-content]'>Cartas</h3>
                        <ul className='absolute hidden flex-col text-left group-hover:flex transition-all h-[max-content] p-[.5rem] bg-[#dd992b] rounded-xl text-[1rem]'>
                            <a href='#' className='hover:text-yellow-200'>Burguers/Cervezas</a>
                            <a href='#' className='hover:text-yellow-200'>Cafetería</a>
                        </ul>
                    </li>
                    <li className='relative group'>
                        <h3 className='hover:cursor-pointer hover:text-[rgb(254,240,138)] transition-all w-[max-content]'>Administrar</h3>
                        <ul className="absolute hidden flex-col text-left group-hover:flex transition-all h-[max-content] p-[.5rem] bg-[#dd992b] rounded-xl text-[1rem]">
                            <a href='#' className='hover:text-yellow-200'>Promociones</a>
                            <a href='#' className='hover:text-yellow-200'>Cartas</a>
                            <a href='#' className='hover:text-yellow-200'>Clientes</a>
                            <a href='#' className='hover:text-yellow-200'>Productos</a>
                            <a href='#' className='hover:text-yellow-200'>Proveedores</a>
                        </ul>
                    </li>
                    <li className='relative group'>
                        <h3 className='hover:cursor-pointer hover:text-[rgb(254,240,138)] transition-all w-[max-content]'>Perfil</h3>
                        <ul className="absolute hidden flex-col text-left group-hover:flex transition-all h-[max-content] p-[.5rem] bg-[#dd992b] rounded-xl text-[1rem]">
                            <a href='#' className='hover:text-yellow-200'>Configurar</a>
                            <a href='#' className='hover:text-yellow-200'>Cerrar Sesión</a>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}