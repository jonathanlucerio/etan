import { useState } from "react";
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';

export default function Carousel({ slides }){

    let [current, setCurrent] = useState(0);

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
                {slides.map((s, a) => {
                    return <img key={a} className="border-white/50 border-2 rounded-lg" src={s} />;
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white/50 md:px-10 px-2 text-3xl">
                <button onClick={previousSlide}>
                    <SlArrowLeft />
                </button>
                <button onClick={nexSlide}>
                    <SlArrowRight />
                </button>
            </div>
            <div className="absolute bottom-0 md:py-2 py-0 flex justify-center gap-3 w-full">
                {slides.map((s, i) =>{
                    return (
                        <div onClick={()=>setCurrent(i)} key={'circle' + i} className={`rounded-full md:w-3 md:h-3 w-2 h-2 cursor-pointer ${ i === current ? 'bg-[#ff8730]' : 'bg-gray-300'}`}></div>
                    )
                })

                };
            </div>
        </div>
        
    );
}