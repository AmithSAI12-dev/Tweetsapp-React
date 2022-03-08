import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import Home from './page/home/Home.component';
import Login from './page/login/Login.component';
import Register from './page/register/Register.component';
import Footer from './components/footer/Footer.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/' element={<Home />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
