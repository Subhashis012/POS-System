import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {

    const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className='bg-[#025cca] p-3 text-xl font-bold rounded-lg text-white'>
        <IoArrowBackOutline size={30} />
    </button>
  )
}

export default BackButton