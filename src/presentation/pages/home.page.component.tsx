import { AccessTokenHook } from "../hooks/accessToken";
import { HomeViewComponent } from "../views/home/home.view.component"


export const HomePageComponent = () => {
    AccessTokenHook();
    return (
        <section className="p-5 text-white">
            <h1>Web Store</h1>
            <HomeViewComponent/>
        </section>
    )
}

