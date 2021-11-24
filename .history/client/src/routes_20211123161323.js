import {Routes,Route} from 'react-router-dom';

export const useRoutes = (isAuthenticated) => {
    if(isAuthenticated){
        <Routes>
            <Route exact path='/links'/>
        </Routes>
    }
}