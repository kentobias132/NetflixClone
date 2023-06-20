import React from 'react'
import { Collapse } from 'react-collapse'
import {AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function Faq({open, toggle, tittle, desc }) {
  return (
    <div className=' pt-[10px] '>
      <div className=' flex justify-between items-center hover:bg-[rgb(82,80,80)] bg-[rgb(45,45,45)] py-[25px] px-[50px] cursor-pointer' onClick={toggle}>
        <p className=' text-[22px] font-semibold '>{tittle}</p>
        <div className=' text-[30px]'>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className=' bg-[rgb(45,45,45)] px-[50px] pb-[20px] text-[20px]'>{desc}</div>
      </Collapse>
    </div>
  )
}

export default Faq