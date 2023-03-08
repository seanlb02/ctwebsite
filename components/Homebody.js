import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/homebody.module.css'
import React, { useState } from "react";


export default function Homebody () {
    return (
        <div className={styles.pageContainer}>
            <section className={styles.leftScroll}>
                    <div className={styles.content}>hey</div>
            </section>
            <section className={styles.rightScroll}>
                    <a target='_blank' href='https://xlr8r.com/mp3/loicc-der-nacht/'><Image src='/loiccXLR8R.png' height={370} width={900}></Image></a>
                    <Image className={styles.image} src='/gutnosePhoto.jpeg' height={400} width={800}></Image>
                    <a target='_blank' href='https://ra.co/reviews/18312'><Image  src='/2200RA.png' height={350} width={1100}></Image></a>
                    <div>hey</div>
                    <div>hey</div>
            </section>


           
        </div>

    )

}