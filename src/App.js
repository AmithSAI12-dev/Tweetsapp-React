import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import Login from './page/login/Login.component';
import Register from './page/register/Register.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
