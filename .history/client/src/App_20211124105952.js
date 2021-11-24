import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { AuthPage } from './pages/AuthPage';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {BrowserRouter} from 'react-router-dom'

function App() {

  const {token} = useAuth()
  const routes = useRoutes(false)

  return (
    <div className="container">
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
