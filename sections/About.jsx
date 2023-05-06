"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <div className='gradient-03 z-0' />
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title='| About Sunauloghar' textStyles='text-center' />
            <motion.p
                variants={fadeIn("up", "tween", 0.1, 1)}
                className='mt-[8px] font-normal sm:text-[24px] text-[20px] text-center text-secondary-white'
            >
                <span className='font-extra-bol text-white'> At Sunauloghar.com</span>, we strive for innovation by providing the
                best architectural, engineering and project management solutions for the construction industry. We are proud of
                our talented team and our portfolio of projects we have accomplished together to date. Success to Sunauloghar.com
                means more than merely delivering projects; but rather pushing the boundaries of design and{" "}
                <span className='font-extra-bol text-white'>pioneering new engineering tools</span> to revolutionize our clients’
                view on design possibilities. We have a diverse selection of projects nationwide, both completed and ongoing. With
                over 7 years experience, our values have never changed. We work with the best people, we are passionate about our
                projects, we care about every detail and most importantly we put our clients’ needs at the heart of everything we
                do. Our journey started in 2016 with our{" "}
                <span className='font-extra-bol text-white'>founder team of Engineers and Architect</span> serving as the
                designing consultant of the projects. Today, we are providing the service of design as well as project management,
                project construction. I invite you to have a{" "}
                <span className='font-extra-bol text-white'>look at our website</span>, where you can learn more about
                Sunauloghar.com and how we do things differently, as we continue to expand and enhance our portfolio across the
                globe.
            </motion.p>
            <motion.img
                variants={fadeIn("down", "tween", 0.3, 1)}
                src='/arrow-down.svg'
                alt='arrow down'
                className='w-[18px] h-[28px] object-contain mt-[28px]'
            />
        </motion.div>
    </section>
);

export default About;
