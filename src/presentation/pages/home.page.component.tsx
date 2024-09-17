import { useNavigate } from "react-router-dom";
import { HomeViewComponent } from "../views/home/home.view.component";

export const HomePageComponent = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/discount')
    }
    return (
        <>
            <section className="flex justify-between items-center p-5">
                <h1 className="text-4xl">Web Store</h1>
                <p
                    className="cursor-default self-start justify-self-end"
                    onClick={handleNavigate}
                >Obtener descuentos →</p>
            </section>
            <section className="px-10">
                <HomeViewComponent />
            </section>
        </>
    )
}

