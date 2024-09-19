import { useEffect, useState } from "react"
import { IProduct } from "../../../domain/interface/products.inteface"
import { CardNewComponent } from "./components"

export const HomeViewComponent = () => {

    const [data, setData] = useState<IProduct[]>([])
    const [dscPercentage, setDscPercentage] = useState(0)

    useEffect(() => {
        getData();
        getDiscountPercentage();
    })

    const getData = async () => {
        try {
            const data = await fetch('https://fakestoreapi.com/products');
            const prod = await data.json();
            setData(prod)
        } catch (error) {
            console.log(`Ha ocurrido une error en el fetch de la data: ${error}`)
        }
    }

    const getDiscountPercentage = () => {
        const getPercentage = localStorage.getItem("DiscountValue")
        setDscPercentage(Number(getPercentage))
    }

    return (
        <section className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8 justify-center justify-items-center">
            {data.map((prod, index) => (
                <CardNewComponent data={prod} key={index} discountPercentage={dscPercentage} />

            ))}
        </section>
    )
}
