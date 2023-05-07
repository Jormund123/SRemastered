"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, servicesBackground } from "../utils/motion";

import Calculator from "../components/Calculator/Calculator";

const GetStarted = () => {
    const [showModal1, setShowModal1] = useState(false);

    const handleToggle1 = () => {
        setShowModal1(!showModal1);
    };
    const [showModal2, setShowModal2] = useState(false);

    const handleToggle2 = () => {
        setShowModal2(!showModal2);
    };
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
            >
                <motion.div variants={servicesBackground("left")} className={`flex-1 ${styles.flexCenter}`}>
                    <img
                        src='/images/commercial/Commercial15.jpeg'
                        alt='get-started'
                        className='w-[90%] h-[90%] object-cover rounded-lg'
                    />
                </motion.div>
                <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className='flex-[0.75] flex justify-center flex-col'>
                    <TypingText title='| How This Works' />
                    <TitleText title={<>Get started with Sunauloghar</>} />
                    <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
                        {startingFeatures.map((feature, index) => (
                            <StartSteps key={feature} number={`${index < 10 ? "0" : ""} ${index + 1}`} text={feature} />
                        ))}
                    </div>
                    <div>
                        <button
                            className='m-[10px] bg-gradient-to-r from-blue-500 via-orange-500 to-red-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-red-400 hover:to-blue-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition hover:scale-105'
                            onClick={handleToggle1}
                        >
                            Documents Required
                        </button>

                        {/* Documents Required Modal */}
                        <AnimatePresence>
                            {showModal1 && (
                                <motion.div
                                    className='fixed z-50 inset-0 overflow-y-auto flex items-center justify-center'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className='absolute inset-0 bg-gray-500 opacity-50'></div>
                                    <motion.div
                                        className='bg-white rounded-lg p-8'
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        <img
                                            src='/images/documentsRequired/documentsRequired.png'
                                            alt='Document Image'
                                            className='w-100% object-contain rounded-md shadow-lg z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                                        />
                                        <button
                                            className='absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-900'
                                            onClick={handleToggle1}
                                        >
                                            <svg
                                                className='w-6 h-6 fill-current'
                                                viewBox='0 0 20 20'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M10 8.586L6.707 5.293a1 1 0 00-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 101.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 00-1.414-1.414L10 8.586z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <button
                            className='m-[10px] bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-red-400 hover:to-blue-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition hover:scale-105'
                            onClick={handleToggle2}
                        >
                            Calculator
                        </button>

                        {/* Calculator Modal */}
                        <AnimatePresence>
                            {showModal2 && (
                                <motion.div
                                    className='fixed z-10 inset-0 overflow-y-auto flex items-center justify-center'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.div
                                        className='bg-white rounded-lg p-8'
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        <Calculator className='z-50' />
                                        <button
                                            className='absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-900'
                                            onClick={handleToggle2}
                                        >
                                            <svg
                                                className='w-6 h-6 fill-current'
                                                viewBox='0 0 20 20'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M10 8.586L6.707 5.293a1 1 0 00-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 101.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 00-1.414-1.414L10 8.586z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default GetStarted;
