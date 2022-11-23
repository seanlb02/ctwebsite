import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/header.module.css'
import React, { useState } from "react";

export default function Header() {

    const [background, setStyle] = useState(styles.heroBackgroundDark)
    const [video, hideVid] = useState(styles.videoBlackout)

    const changeBackground = () => {
        if (background==styles.heroBackgroundDark){
            setStyle(styles.heroBackgroundLight)}
         if (video==styles.videoBlackout){
            hideVid(styles.videoOverlay)}
        
        if (background==styles.heroBackgroundLight){
            setStyle(styles.heroBackgroundDark)}
        if (video==styles.videoOverlay){
            hideVid(styles.videoBlackout)}

       
        
    }

    return (

        <div className={styles.headerContainer}>
            <div className={video}>
            <video  playsInline autoPlay="true" loop="loop" muted="true">
                <source src="/manwalkcounting.mp4" type="video/mp4"/>
                       
            </video>
            </div> 
            <div onClick={changeBackground} className={background}>
            <div className={styles.snakeLine}></div>
            <p className={styles.heroText}>On and off since 2013 and probably never again. records and tapes from grey people, j albert, elite athlete, palace, 2200, gutnose, loiic, aspley and text86.</p>
            
            
            </div>
            <p className={styles.button} onClick={changeBackground}>Don't click</p>
            

        </div>
    )
}