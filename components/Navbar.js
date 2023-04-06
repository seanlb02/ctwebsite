import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/navbar.module.css'
import React, { useState } from "react";

export default function Navbar() {
    return (

        <div className ={styles.navbarContainer}>
            <ul className={styles.linkList}>
                <li className={styles.link}><Link href="/contact" >Contact</Link></li>
                <li className={styles.link}><Link href="https://seetee.bandcamp.com/" target="_blank">Shop</Link></li>
                <li className={styles.link}>Press</li>
                <li className={styles.link}>Releases</li>
                <li className={styles.link}><Link href="/">Home</Link></li>
            </ul>

        </div>


    )
}