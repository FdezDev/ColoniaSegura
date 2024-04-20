import React from 'react'
import SidebarAdmin from '../../components/dashboard/SidebarAdmin'
import NavbarAdmin from '../../components/dashboard/NavbarAdmin'
import ViewAlarma from '../../components/Tablas/ViewAlarma'

function AdminAlarma() {
  return (
    <>
        <main>
            <SidebarAdmin/>
            <NavbarAdmin/>
            <section className='lg:ml-[256px] lg:block'>
            <h1 className="px-4 mt-4 font-bold md:text-xl lg:text-4xl">Alarma</h1>
                <ViewAlarma/>
            </section>
        </main>
    </>
  )
}

export default AdminAlarma;