import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/header.module.css'
import React, { useState } from "react";

export default function Header() {

    const [background, setStyle] = useState(styles.heroBackgroundDark)
    const changeBackground = () => {
        if (background==styles.heroBackgroundDark){
            setStyle(styles.heroBackgroundLight)}
        if (background==styles.heroBackgroundLight){
            setStyle(styles.heroBackgroundDark)}
        
    }

    return (

        <div className={styles.headerContainer}>
            <div onClick={changeBackground} className={background}>
            <div className={styles.snakeLine}></div>
            <p className={styles.heroText}>On and off since 2013 and probably never again. records and tapes from grey people, j albert, elite athlete, palace, 2200, gutnose, loiic, aspley and text86.</p>
            
        </div>            
            <p className={styles.button} onClick={changeBackground}>Don't click</p>
            

        </div>
    )
}