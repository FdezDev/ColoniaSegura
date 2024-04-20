import React from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import AlertRigth from '../../components/dashboard/AlertRigth'
import TableAlert from '../../components/layaoutChat/desktop/TableAlert'

function Notificacion() {
  return (
    <>
        <main>
            <Sidebar/>
            <section className='lg:ml-[256px] lg:pr-[306px] hidden lg:block'>
                <TableAlert/>
            </section>
            <AlertRigth/>
        </main>
    </>
  )
}

export default Notificacion