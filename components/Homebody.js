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
                    ho
            </section>


           
        </div>

    )

}