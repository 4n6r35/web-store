import { createBrowserRouter } from "react-router-dom";
import { routerchilds } from "./app.routes copy";
import { Protected } from "./guards/protected";
import { HomeRouterLayout } from "./layouts/home.layaout";
import { HomePageComponent } from "./pages/home.page.component";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePageComponent/>
    },
    {
        path: "/shopping",
        children: routerchilds,
        element:(
            <Protected>
                <HomeRouterLayout/>
            </Protected>

        ) 


    }
])