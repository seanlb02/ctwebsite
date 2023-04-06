import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/homebody.module.css'
import React, { useState } from "react";


export default function Homebody () {
    return (
        <div className={styles.pageContainer}>
            <section className={styles.leftScroll}>
                    <Image className={styles.leftImage} src='/loiicSideA.jpg' width={300} height={300}></Image>
                    <Image className={styles.leftImage} src='/gutnoseCover.jpg' width={300} height={300}></Image>
                    <Image className={styles.leftImage} src='/2200Cover.jpg' width={300} height={300}></Image>
                    <Image className={styles.leftImage} src='/eliteCover.jpg' width={300} height={300}></Image>
                    <Image className={styles.leftImage} src='/jalbert.jpg' width={300} height={300}></Image>
                    <Image className={styles.leftImage} src='/greyCover.jpg' width={300} height={300}></Image>
                    <Image className={styles.leftImage} src='/loiicSideA.jpg' width={300} height={300}></Image>

                    
            </section>
            <section className={styles.rightScroll}>
                    
                    <Image className={styles.image} src='/gutnosePhoto.jpeg' height={400} width={700}></Image>
                    <a target='_blank' href='https://xlr8r.com/mp3/loicc-der-nacht/'><Image src='/loiccXLR8R.png' height={370} width={900}></Image></a>

                    <a target='_blank' href='https://ra.co/reviews/18312'><Image  src='/2200RA.png' height={300} width={1100}></Image></a>
                    <div>hey</div>
                    <div>hey</div>
            </section>


           
        </div>

    )

}