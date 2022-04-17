import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Checkout from './Components/Checkout/Checkout';
import DefultPage from './Components/DefultPage/DefultPage';
import Bottom from './Components/Footer/Bottom';
import Header from './Components/Header/Header';
import Hero from './Components/Home/Hero';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Hero></Hero>}></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } ></Route>
        <Route path='*' element={<DefultPage></DefultPage>}></Route>
      </Routes>
    <Bottom></Bottom>
    </div>
  );
}

export default App;
