import { Link } from "react-router-dom"
import { LogoIcon } from "../../../assets"

export const NavBarComponent = () => {
    return <> <section className="flex justify-between items-center px-5 h-20 text-gray-800 fixed w-dvw bg-stone-100 z-50 shadow">
        <div className="flex items-center gap-2 justify-items-center cursor-pointer select-none">
            <LogoIcon width={40} />
            <p className="font-bold text-2xl ">
                Web Store
            </p>
        </div>
        <div>

            <Link to={"/discount"}
                className="self-start justify-self-end cursor-pointer p-2 hover:bg-primary-500 rounded-full hover:text-white"

            >Obtener descuentos →</Link>
        </div>
    </section></>
}