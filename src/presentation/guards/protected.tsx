import { Navigate } from 'react-router-dom';
import { AccessTokenHook } from '../hooks/accessToken';
export const Protected = ({ children }: { children: JSX.Element }) => {

    if ( !AccessTokenHook()) {
        console.log('entro');
        return  <Navigate to="/" replace={true} />    
    }

    return children
}