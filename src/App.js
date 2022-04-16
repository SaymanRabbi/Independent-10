import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Hero></Hero>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
