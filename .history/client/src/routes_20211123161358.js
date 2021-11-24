import {Routes,Route} from 'react-router-dom';
import { LinksPage } from './pages/LinksPage';

export const useRoutes = (isAuthenticated) => {
    if(isAuthenticated){
        <Routes>
            <Route exact path='/links' element={<LinksPage></LinksPage>}/>
        </Routes>
    }
}