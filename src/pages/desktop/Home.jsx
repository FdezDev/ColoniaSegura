import React from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import Chats from '../../components/layaoutChat/desktop/Chats'
import AlertRigth from '../../components/dashboard/AlertRigth'

function Home() {
  return (
    <>
        <main>
            <Sidebar/>
            <section className='lg:ml-[256px] lg:pr-[306px] hidden lg:block'>
                <Chats/>
            </section>
            <AlertRigth/>
        </main>

    </>
  )
}

export default Home