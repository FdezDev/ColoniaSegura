import React from 'react'
import Alert from '../../ui/Alert'
import Navbar from '../../dashboard/Navbar'

function TableAlert() {
  return (
    <>  
    <Navbar/>
        <div className='p-4 flex flex-col'>
            <Alert className="text-[#EF6060] border-[#EF6060] border-2 " text="PÁNICO" />
            <Alert className="text-[#EAAD65] border-[#EAAD65] border-2 " text="SOSPECHA" />
            <Alert className="text-[#7678ED] border-[#7678ED] border-2 " text="EMERGENCIA" />
        </div>
    </>
  )
}

export default TableAlert