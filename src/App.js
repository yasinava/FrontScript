import { Route, Routes } from 'react-router-dom';
import {Provider } from "react-redux"
import store from './components/redux/store';

// style
import './App.css';
// components
import UserAccount from "./components/UserAccount"
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Doreha from './components/Doreha';
import Opinions from './components/Opinions';
import Shop from './components/Shop';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from "./components/About"
import Footer from './components/Footer';
import DetailCard from './components/shared/DetailCard';
function App() {
  return (
    <Provider store={store} >
    <div className="App">
        <Navbar/>
        <div className='components'>
          <Routes>
            <Route path='*' element={<LandingPage/>}/>
            <Route path='/doreha'element={<Doreha/>} />
            <Route path='/detail/:id'element={<DetailCard/>} />
            <Route path='/opinion'element={<Opinions/>} />
            <Route path='/shop'element={<Shop/>} />
            <Route path='/signUp'element={<SignUp/>} />
            <Route path='/login'element={<Login/>} />
            <Route path='/userAccount'element={<UserAccount/>} />
            <Route path='/about'element={<About/>} />
          </Routes>
        </div>
        <Footer/>
    </div>
    </Provider>
  );
}

export default App;
