import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const AccessTokenHook = () => {
    const [isValidToken, setIsValidToken] = useState(!!localStorage.getItem("Token"));
    const token = localStorage.getItem("Token");
    const location = useLocation();

    console.log(isValidToken);

    useEffect(() => {
        if (token?.length !== 0) {
            setIsValidToken(true);
            return;
        }

        setIsValidToken(false);
    },[location]);


    console.log(isValidToken);
    return isValidToken;
}