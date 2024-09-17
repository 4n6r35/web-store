import { useEffect, useState } from "react"
import { CardComponent } from "./components/card.componet"
import { IProduct } from "../../../domain/interface/products.inteface"

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
        <section className="">
            <CardComponent data={data} discountPercentage={dscPercentage} />
        </section>
    )
}
