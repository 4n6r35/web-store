import { Outlet } from "react-router-dom";


export const HomeRouterLayout = () =>{
    return (
        <section className="h-screen w-screen flex flex-col">
            <h1>Esto es layout</h1>
            <article className="flex-1">
                <Outlet/>
            </article>
        </section>
        
    )
};