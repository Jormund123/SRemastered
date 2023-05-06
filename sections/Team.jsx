"use client";
import { motion } from "framer-motion";
import { teamMembers } from "../constants";
import styles from "../styles/index.js";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                <TypingText title='| Sunauloghar' textStyles='text-center' />
                <TitleText title={<>Our Team</>} textStyles='text-center' />
                <div className='team-carousel-wrapper'>
                    <Slider {...settings}>
                        {teamMembers.map((member) => (
                            <div key={member.name} className='team-member'>
                                <img src={member.image} alt={member.name} />
                                <div className='member-details'>
                                    <h3>{member.name}</h3>
                                    <p>{member.position}</p>
                                    <p>{member.skill}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </motion.div>
        </section>
    );
};

export default Team;
