"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const Map = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <TypingText title='| Find Us' textStyles='text-center' />
            <TitleText
                title={<>We are an ambitious architectural company which combines technology & architecture in a flawless way.</>}
                textStyles='text-center'
            />

            <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className='w-full'>
                <div className='map' style={{ height: "400px", borderRadius: "20px", overflow: "hidden" }}>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.063600983047!2d83.46244901544118!3d27.68442908280135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687c60aa7c99d%3A0x782bfea8604abbb5!2sSunauloghar.com!5e0!3m2!1sen!2snp!4v1645967981047!5m2!1sen!2snp'
                        className='mapCSS'
                        allowFullScreen=''
                        aria-hidden='false'
                        tabIndex='0'
                        title='mapFrame'
                        style={{ width: "100%", height: "100%", border: "none" }}
                    ></iframe>
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default Map;
