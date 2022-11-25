import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/footer.module.css'
import React, { useState } from "react";
import Facebook from '../public/facebook.svg'
import Soundcloud from '../public/soundcloud.svg'
import Instagram from '../public/instagram.svg'
import Bandcamp from '../public/bandcamp.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'



export default function Footer () {

    return(
        <div className={styles.footerContainer}>
            <h1></h1>


            <icons className={styles.socialIcons}> 
                    <Link className={styles.icon}href="https://www.facebook.com/culttriplabel/" target= "_blank"><Facebook className={styles.svg} src="/facebook.svg" height="25" width="25"/></Link>
                    <Link className={styles.icon}href="https://www.facebook.com/culttriplabel/" target= "_blank"><Soundcloud className={styles.svg} src="/facebook.svg" height="25" width="25"/></Link>   
                    <Link className={styles.icon}href="https://www.facebook.com/culttriplabel/" target= "_blank"><Instagram className={styles.svg} src="/facebook.svg" height="25" width="25"/></Link>   
                    <Link className={styles.icon}href="https://www.facebook.com/culttriplabel/" target= "_blank"><Bandcamp className={styles.svg} src="/facebook.svg" height="25" width="25"/></Link>    
            </icons>
        </div>
    )
}