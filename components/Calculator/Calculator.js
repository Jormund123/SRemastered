import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@windmill/react-ui";

export default function Calculator() {
    const re = /^[0-9\b]+$/; //for checking if the input is a number

    const [ropani, setRopani] = useState();
    const [aana, setAana] = useState();
    const [paisa, setPaisa] = useState();
    const [daam, setDaam] = useState();
    const [bigaha, setBigaha] = useState();
    const [kattha, setKattha] = useState();
    const [dhur, setDhur] = useState();
    const [squareft, setSquareft] = useState();
    const [squareMt, setSquareMt] = useState();

    function Ropani(meterSquare) {
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 16.93);
        setSquareft(meterSquare * 10.7639);
    }
    function Aana(meterSquare) {
        setRopani(meterSquare / 508.72);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 16.93);
        setSquareft(meterSquare * 10.7639);
    }
    function Paisa(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 16.93);
        setSquareft(meterSquare * 10.7639);
    }
    function Daam(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 16.93);
        setSquareft(meterSquare * 10.7639);
    }
    function Bigaha(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 16.93);
        setSquareft(meterSquare * 10.7639);
    }
    function Kattha(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setDhur(meterSquare / 16.93);
        setSquareft(meterSquare * 10.7639);
    }
    function Dhur(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setSquareft(meterSquare * 10.7639);
    }
    function Squareft(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 16.93);
    }
    function SquareMt(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 16.93);
        setSquareft(meterSquare * 10.7639);
    }

    const handleOnChangeRopani = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setRopani(input);
            let meterSquare = input * 508.72;
            setSquareMt(meterSquare);
            Ropani(meterSquare);
        }
    };

    const handleOnChangeAana = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setAana(input);
            let meterSquare = input * 32;
            setSquareMt(meterSquare);
            Aana(meterSquare);
        }
    };
    const handleOnChangePaisa = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setPaisa(input);
            let meterSquare = input * 8;
            setSquareMt(meterSquare);
            Paisa(meterSquare);
        }
    };
    const handleOnChangeDaam = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setDaam(input);
            let meterSquare = input * 2;
            setSquareMt(meterSquare);
            Daam(meterSquare);
        }
    };
    const handleOnChangeBigaha = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setBigaha(input);
            let meterSquare = input * 6772.73;
            setSquareMt(meterSquare);
            Bigaha(meterSquare);
        }
    };
    const handleOnChangeKattha = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setKattha(input);
            let meterSquare = input * 338;
            setSquareMt(meterSquare);
            Kattha(meterSquare);
        }
    };
    const handleOnChangeDhur = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setDhur(input);
            let meterSquare = input * 16.93;
            setSquareMt(meterSquare);
            Dhur(meterSquare);
        }
    };
    const handleOnChangeSquareFeet = (event) => {
        event.preventDefault();
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setSquareft(input);
            let meterSquare = input * 0.093;
            setSquareMt(meterSquare);
            Squareft(meterSquare);
        }
    };
    const handleOnChangeSquareMeter = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setSquareMt(input);
            SquareMt(input);
        }
    };

    return (
        <>
            <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6'>
                <div className='flex flex-col space-y-4 md:w-1/2'>
                    <motion.label
                        className='text-xl font-bold text-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Ropani
                    </motion.label>
                    <Input type='number' onChange={handleOnChangeRopani} value={ropani} className='bg-gray-100 focus:bg-white' />

                    <motion.label
                        className='text-xl font-bold text-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Aana
                    </motion.label>
                    <Input type='number' onChange={handleOnChangeAana} value={aana} className='bg-gray-100 focus:bg-white' />

                    <motion.label
                        className='text-xl font-bold text-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Paisa
                    </motion.label>
                    <Input type='number' onChange={handleOnChangePaisa} value={paisa} className='bg-gray-100 focus:bg-white' />
                </div>
                <div className='flex flex-col space-y-4 md:w-1/2'>
                    <motion.label
                        className='text-xl font-bold text-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Daam
                    </motion.label>
                    <Input type='number' onChange={handleOnChangeDaam} value={daam} className='bg-gray-100 focus:bg-white' />

                    <motion.label
                        className='text-xl font-bold text-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Bigaha
                    </motion.label>
                    <Input type='number' onChange={handleOnChangeBigaha} value={bigaha} className='bg-gray-100 focus:bg-white' />

                    <motion.label
                        className='text-xl font-bold text-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Kattha
                    </motion.label>
                    <Input type='number' onChange={handleOnChangeKattha} value={kattha} className='bg-gray-100 focus:bg-white' />
                </div>
                <div className='flex flex-col space-y-4 md:w-1/2'>
                    <motion.label
                        className='text-xl font-bold text-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Dhur
                    </motion.label>
                    <Input type='number' onChange={handleOnChangeDhur} value={dhur} className='bg-gray-100 focus:bg-white' />

                    <motion.label
                        className='text-xl font-bold text-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Square Ft.
                    </motion.label>
                    <Input
                        type='number'
                        onChange={handleOnChangeSquareFeet}
                        value={squareft}
                        className='bg-gray-100 focus:bg-white'
                    />

                    <motion.label
                        className='text-xl font-bold text-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Square Mt.
                    </motion.label>
                    <Input
                        type='number'
                        onChange={handleOnChangeSquareMeter}
                        value={squareft}
                        className='bg-gray-100 focus:bg-white'
                    />
                </div>
            </div>
        </>
    );
}
