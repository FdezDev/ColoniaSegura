import React, { useState } from "react";
import panico from "../../assets/icons/panico.svg";
import sospecha from "../../assets/icons/sospecha.svg";
import emergencia from "../../assets/icons/emergencia.svg";
import logo from "../../assets/icons/logo2.svg";
import ButtonAlert from "../ui/ButtonAlert";

function AlertRigth() {
    const [isAlarmActive, setIsAlarmActive] = useState(false);
    const [loading, setLoading] = useState(false);
    

    const handleAlertClick = async (btnName) => {
        if (loading) return;
        console.log("Se hizo click en el botón:", btnName);
    
        const userData = localStorage.getItem('userData');
        if (!userData) return;
        setLoading(true);
        const { userId, groupId } = JSON.parse(userData);
        console.log("Estamos imprimiendo los datos del localstorage")
        console.log("User",userId)
        console.log("alarma",groupId)
        console.table(userData)
        const alarmId = groupId;

        let endpoint = isAlarmActive ? 'http://localhost:3000/alarm/desactivate' : 'http://localhost:3000/alarm/activate';
        let methodo = isAlarmActive ? 'false' : 'true';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({alarmId, userId }),
            });
            if (response.ok) {
                console.log(`Alarma ${methodo} correctamente.`);
                setIsAlarmActive(!isAlarmActive); // Cambiar el estado de la alarma
            } else {
                console.error(`Error al ${methodo.toLowerCase()} la alarma.`);
            }
        } catch (error) {
            console.error(`Error al ${methodo.toLowerCase()} la alerta:`, error);
        } finally{
            setLoading(false);
        }
    }

    return (
        <>
            <aside className="fixed top-0 hidden border-l border-gray-400 lg:flex right-0 z-50 h-screen w-[310px] flex-col px-3 bg-white translate-x-full sm:translate-x-0">
                <h1 className="px-5 flex items-start text-xl font-semibold my-6">
                    Seguridad en casa
                </h1>
                <div className="my-8 mx-auto">
                    <img className="h-24" src={logo} alt="" />
                </div>
                <div className="flex flex-col items-center gap-3">
                    <button className={` w-full p-3 px-4 text-xl flex items-center gap-3 text-white font-normal rounded-lg bg-[#EF6060] hover:bg-[#ef6060c2] ${isAlarmActive ? 'bg-opacity-50' : ''}`} onClick={() => handleAlertClick("PÁNICO")}>
                        <img src={panico} alt="" />    
                        Panico2
                    </button>
                    
                    <ButtonAlert
                        onClick={() => handleAlertClick("SOSPECHA")}
                        className="bg-[#EAAD65] hover:bg-[#eaac65b2]"
                        img={sospecha}
                        text="SOSPECHA"
                    />
                    <ButtonAlert
                        onClick={() => handleAlertClick("EMERGENCIA")}
                        className="bg-[#7678ED] hover:bg-[#7678edb1]"
                        img={emergencia}
                        text="EMERGENCIA"
                    />
                </div>
            </aside>
        </>
    );
}

export default AlertRigth;
