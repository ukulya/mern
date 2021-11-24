import {Routes,Route} from 'react-router-dom';
import { CreatePage } from './pages/CreatePage';
import { DetailPage } from './pages/DetailPage';
import { LinksPage } from './pages/LinksPage';

export const useRoutes = (isAuthenticated) => {
    if(isAuthenticated){
        <Routes>
            <Route exact path='/links' element={<LinksPage/>}/>
            <Route exact path='/create' element={<CreatePage/>}/>
            <Route exact path='/links' element={<DetailPage/>}/>
        </Routes>
    }
}