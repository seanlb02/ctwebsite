import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Releases from '../components/Releases'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import styles from '../styles/homepage.module.css'
import useScrollSnap from 'react-use-scroll-snap'
import { useRef } from "react";
import Homebody from '../components/Homebody'

export default function Home() {

  return (

    <div className={styles.pageContainer}>
    <Header className="z-40"/>
    <Navbar/>
    <Homebody className="z-1"/>
    <Releases/>
    <Footer/>
    </div>
  )
}
