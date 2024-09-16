import { useNavigate } from "react-router-dom";
import { HomeViewComponent } from "../views/home/home.view.component";

export const HomePageComponent = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/discount')
    }
    return (
        <>
            <section className="w-[98%] pl-5 pt-5 grid grid-cols-2 text-white">
                <h1 className="text-4xl">Web Store</h1>
                <p
                    className="cursor-default self-start justify-self-end"
                    onClick={handleNavigate}
                >Obtener descuentos →</p>
            </section>
            <section className="p-5">
                <HomeViewComponent />
            </section>
        </>
    )
}

