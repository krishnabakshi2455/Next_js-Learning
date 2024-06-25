"use client"
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='flex justify-around bg-slate-800 text-white py-4'>
      <div className="logo font-bold">Facebook</div>
      <ul className='flex gap-6'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/contact'><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar