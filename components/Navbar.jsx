import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <div style={{
    }}>
        <Link href={'/'}>
        Ashmit Yadav
        </Link>
        <Link href={'/Project'}>
        Projects
        </Link>
        <Link href={'/Experience'}>
        experience
        </Link>
       
     
    </div>
  )
}

export default Navbar