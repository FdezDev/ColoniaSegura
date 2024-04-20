import React from 'react'
import ViewUsers from '../../components/Tablas/ViewUsers'
import SidebarAdmin from '../../components/dashboard/SidebarAdmin'
import NavbarAdmin from '../../components/dashboard/NavbarAdmin'

function AdminUser() {
  return (
    <>
        <main>
            <SidebarAdmin/>
            <NavbarAdmin/>
            <section className='lg:ml-[256px]  lg:block'>
                <h1 className='px-4 mt-4 font-bold text-4xl'>TODOS USUARIOS</h1>
                <ViewUsers/> 
            </section>
        </main>
    </>
  )
}

export default AdminUser