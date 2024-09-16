import { createBrowserRouter } from "react-router-dom";
import { HomePageComponent } from "./pages/home.page.component";
import { DiscountPageComponent } from "./pages/discounts.page.components";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePageComponent />
    },
    {
        path: "/discount",
        element: <DiscountPageComponent />,
    }
])