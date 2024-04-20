import React from "react";
import Sidebar from "./components/dashboard/Sidebar";
// import HeroAlertMobile from './components/layaoutChat/mobile/HeroAlertMobile'
import AlertHomeMobile from "./pages/mobiles/AlertHomeMobile";
import ChatsMobile from "./pages/mobiles/ChatsMobile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroAlertTable from "./pages/desktop/HeroAlertTable";
import Home from "./pages/desktop/Home";
import Notificacion from "./pages/desktop/Notificacion";
import Login from "./components/Form/Login";
import ViewUsers from "./components/Tablas/ViewUsers";
import AdminUser from "./pages/desktop/AdminUser";
import AdminGrupo from "./pages/desktop/AdminGrupo";
import AdminAlarma from "./pages/desktop/AdminAlarma";


function App() {



  return (
    <>
      <Router>
        <div>
          <div className="hidden lg:block">
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/notificacion" element={<Notificacion/>} />

              {/* <Route path="/" element={<Home/>} /> */}
            </Routes>
          </div>
          <div>
            <Routes >
              <Route path="/users" element={<AdminUser/>} />
              <Route  path="/grupo" element={<AdminGrupo/>} />
              <Route  path="/alarma" element={<AdminAlarma/>} />
            </Routes>
          </div>
          <div className=" block lg:hidden">
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<AlertHomeMobile/>} />
              <Route path="/chat" element={<ChatsMobile/>} />
              <Route path="/notificacion" element={<HeroAlertTable/>} />
              
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
