import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthContextProvider from './context/AuthUser';
import Routes from './routes/Routes';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
