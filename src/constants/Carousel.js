import { useState } from "react";
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';

export default function Carousel({slides}){

    let [current, setCurrent] =useState(0);

    let previousSlide = () =>{
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nexSlide = () =>{
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative">
            <div className='flex transition ease-out duration-500'
            style={{
                transform: `translateX(-${current * 100}%)`
            }}>
                {slides.map((s) => {
                    return <img className="border-white/50 border-2 rounded-lg" src={s} />;
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white/50 px-10 text-3xl">
                <button onClick={previousSlide}>
                    <SlArrowLeft />
                </button>
                <button onClick={nexSlide}>
                    <SlArrowRight />
                </button>
            </div>
            <div className="absolute bottom-0 py-2 flex justify-center gap-3 w-full">
                {slides.map((s, i) =>{
                    return (
                        <div onClick={()=>setCurrent(i)} key={'circle' + i} className={`rounded-full w-3 h-3 cursor-pointer ${ i === current ? 'bg-[#ff8730]' : 'bg-gray-300'}`}></div>
                    )
                })

                };
            </div>
        </div>
        
    );
}