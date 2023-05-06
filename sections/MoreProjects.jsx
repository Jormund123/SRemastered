"use client";
import { motion } from "framer-motion";
import styles from "../styles/index";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../constants";
const MoreProjects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className={`${styles.paddings}`} id='explore'>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title='| This is not the end' textStyles='text-center' />
                <TitleText title={<>More Projects</>} textStyles='text-center' />
                <div className='team-carousel-wrapper'>
                    <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
                        <Slider {...settings}>
                            {projects.map((member) => (
                                <div key={member.id} className='project-member'>
                                    <img src={member.url} alt={member.id} />
                                    <div className='member-details'></div>
                                </div>
                            ))}
                        </Slider>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default MoreProjects;
