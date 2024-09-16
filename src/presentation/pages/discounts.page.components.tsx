import { useNavigate } from "react-router-dom";
import { DiscountViewComponent } from "../views/discounts/discount.view.components"


export const DiscountPageComponent = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <>
            <p
                className="pt-3 pl-4 cursor-default self-start justify-self-end"
                onClick={handleNavigate}
            >Regresar</p>
            <section className="p-4 text-white">
                <h1 className="text-4xl">Descuentos</h1>
                <DiscountViewComponent />
            </section>
        </>
    )
}

