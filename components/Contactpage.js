import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/contact.module.css'
import React, { useState } from "react";

export default function Contactpage () {
    return (

        // <Head>
        //      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        // </Head>

        <div className={styles.pageContainer}>
            <div className={styles.videoOverlay}>
            <video  playsInline autoPlay="true" loop="loop" muted="true">
                <source src="/manlookingatcamera.mp4" type="video/mp4"/>
                       
            </video>
            </div> 
            <div className={styles.contactTitle}>Contact</div>
            <div className={styles.email}>culttrip<br></br>records<br></br>@live.com</div>
        </div>
    )
}