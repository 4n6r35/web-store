import { RouteObject } from "react-router-dom";
import { HomeViewComponent } from "./views/home/home.view.component";

export const routerchilds: RouteObject[] = [
    {
        path:"",
        element:<HomeViewComponent/>
        
    },
    {
        path:"/shopping/category",
        element: <><h1>Categories</h1></>
        
    }
];
