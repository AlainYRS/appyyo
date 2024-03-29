import React from "react";
import Image from "next/image";
import Head from "next/head";
import PagesHeadComp from "@/complements/components/PagesHeadComp/PagesHeadComp";
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import styles from "@/styles/innovationLab.module.css"
import {HeaderCompBoots} from '@/complements/components/HeaderComp/HeaderCompBoots';

export default function InnovationLab(){

    return(
        <>
            <Head>
                <title>Innovation Lab</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/Icons/manifest_icons/appyyo.png" />
                <meta name="theme-color" content="#2F303A" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled' />
            </Head>
            <PagesHeadComp
                data={{
                    faviconURL: "/Icons/manifest_icons/appyyo.png",
                    title: "Appy.yo® - Home",
                    description: "",
                    keywords: "",
                }}
            />
            <HeaderCompBoots />
            <main className={styles.main}>
                <article className={styles.article}>
                    <h1>Innovation Lab</h1>
                    <p>
                        Welcome to the innovation lab where we make your dreams come true!
                        Well the technology dreams!
                    </p>
                    <p>
                        Innovation Lab offers access to anyone who has a great idea that could help their day to day activities or their community by creating a technology piece.
                    </p>
                    <p>
                        We work with you to understand how it should work, discover features, provide recommendations and assist in the build and promotion. All you need to do is bring your idea and we will make it happen
                    </p>
                </article>
                <span className={styles.Image}>
                    <Image className={styles.Img} src="/Images/InnovationLab.jpeg" fill alt="Innovation_Lab"/>
                </span>
                <a href={'/GetInTouch'} className={styles.ServicesButton} id="ServNeeded">Submit Your ideas Here</a>
            </main>
            {/*Footer Component*/}
            <FooterComp 
                classNames={''}
                langs={{
                developed: "Developed by",
                copyright: "Copyright",
                made: "made",
                version: "version",
                }}
            />
        </>
    )
}