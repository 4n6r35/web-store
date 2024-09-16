import { useEffect, useState } from "react"
import { CardComponent } from "./components/card.componet"
import { IProduct } from "../../../domain/interface/products.inteface"

export const HomeViewComponent = () => {

    const [data, setData] = useState<IProduct[]>([])

    useEffect(() => {
        getData();
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

    return (
        <section className="no-scrollbar overflow-y-scroll w-[99.9%] ">
            <h1>HomeViewComponentWorks!</h1>
            <CardComponent  data={data} />
        </section>
    )
}
