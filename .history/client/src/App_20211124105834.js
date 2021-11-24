import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { AuthPage } from './pages/AuthPage';
import {useRoutes} from './routes';
import {BrowserRouter} from 'react-router-dom'

function App() {

  useAu
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