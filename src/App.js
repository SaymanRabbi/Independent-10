import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bottom from './Components/Footer/Bottom';
import Footer from './Components/Footer/Bottom';
import Header from './Components/Header/Header';
import Hero from './Components/Home/Hero';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Hero></Hero>}></Route>
        
      </Routes>
    <Bottom></Bottom>
    </div>
  );
}

export default App;
