import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
