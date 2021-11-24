import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { AuthPage } from './pages/AuthPage';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {BrowserRouter} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';

function App() {

  const {token,login,logout,userId} = useAuth()
  const isAuthenticated = !!token;
  // const routes = useRoutes(false)
  const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{token,login,logout,userId,isAuthenticated}}>
    <div className="container">
      {isAu}
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
