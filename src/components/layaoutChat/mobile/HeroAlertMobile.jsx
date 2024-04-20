import React from "react";
import sospecha from "../../../assets/icons/sospecha.svg";
import panico from "../../../assets/icons/panico.svg";
import emergencia from "../../../assets/icons/emergencia.svg";
import ButtonAlert from "../../ui/ButtonAlert";

function HeroAlertMobile() {
  return (
    <section>
      <h1 className="px-5 flex items-start text-xl font-semibold my-5">
        Seguridad en casa
      </h1>

      <div className="flex flex-col gap-3 px-5">
        <ButtonAlert
          className="bg-[#EF6060] hover:bg-[#ef6060c2]"
          img={panico}
          text="PÁMICO"
        />
        <ButtonAlert
          className="bg-[#EAAD65] hover:bg-[#eaac65b2]"
          img={sospecha}
          text="SOSPECHA"
        />
        <ButtonAlert
          className="bg-[#7678ED] hover:bg-[#7678edb1]"
          img={emergencia}
          text="EMERGENCIA"
        />
      </div>
    </section>
  );
}

export default HeroAlertMobile;
