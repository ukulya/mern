import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { AuthPage } from './pages/AuthPage';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {BrowserRouter} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';

function App() {

  const {token,login,logout,userId} = useAuth()
  const routes = useRoutes(false)

  return (
    <AuthContext.Provider value={{}}>
    <div className="container">
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
