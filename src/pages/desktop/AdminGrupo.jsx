import React from "react";
import SidebarAdmin from "../../components/dashboard/SidebarAdmin";
import ViewGrupo from "../../components/Tablas/ViewGrupo";
import Navbar from "../../components/dashboard/Navbar";
import NavbarAdmin from "../../components/dashboard/NavbarAdmin";

function AdminGrupo() {
  return (
    <>
      <main>
        <SidebarAdmin />
        <NavbarAdmin/>
        <section className="lg:ml-[256px] lg:block">
          <h1 className="px-4 mt-4 font-bold md:text-xl lg:text-4xl">GRUPOS</h1>
          <ViewGrupo/>
        </section>
      </main>
    </>
  );
}

export default AdminGrupo;
