import logo from './logo.svg';
import './App.css';
import Layoutadmin from './admin/components/Layoutadmin';
import Routing from './admin/components/Routing';
import { Route, Routes } from 'react-router-dom';
import Content from './admin/components/Content';
import Major from './admin/components/Major';
import Course from './admin/components/Course';
import Page404 from './user/components/Page404';
import Login from './components/Login';
import Home from './user/components/Home';
import Routingg from './components/Routingg';
import NavbarU from './user/components/NavbarU';



function App() {
  return (
    <>
      <Routingg/>
    </>
  );
}

export default App;
