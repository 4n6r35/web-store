
import { ArrowLeftIcon } from "../assets"
import { DiscountViewComponent } from "../views/discounts/discount.view.components"


export const DiscountPageComponent = () => {

    const handleNavigate = () => {
        window.history.back()
    }

    return (
        <>
            <div className="text-gray-900 flex justify-start gap-2 p-2 w-dvw items-center" >
                <p
                    className="w-10 flex justify-center items-center aspect-square rounded-md hover:bg-stone-200 text-2xl "
                    onClick={handleNavigate}
                ><ArrowLeftIcon /></p>
                <h1 className="text-xl font-bold">Descuentos</h1>
            </div>
            <section className="w-dvw px-4">
                <DiscountViewComponent />
            </section>
        </>
    )
}

