import { NavBarComponent } from "../views/home/components";
import { HomeViewComponent } from "../views/home/home.view.component";

export const HomePageComponent = () => {


    return (
        <>
            <div className="bg-stone-100 relative w-dvw h-dvh">
                <NavBarComponent />
                <section className="h-[calc(100dvh_-_80px)] overflow-y-auto absolute top-20 w-dvw bg-stone-100">
                    <HomeViewComponent />
                </section>
            </div>
        </>
    )
}

