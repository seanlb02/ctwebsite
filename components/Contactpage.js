import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/contact.module.css'
import React, { useState } from "react";

export default function Contactpage () {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.videoOverlay}>
            <video  playsInline autoPlay="true" loop="loop" muted="true">
                <source src="/manlookingatcamera.mp4" type="video/mp4"/>
                       
            </video>
            </div> 
            <div className={styles.contactTitle}>Contact</div>



        </div>
    )
}