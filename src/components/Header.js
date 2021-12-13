import React from 'react';
import { useState, useEffect } from 'react';

import { LazyLoadImage  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Typical from 'react-typical';

import { Link } from 'react-scroll';

import content from '../content';

export default function Header() {

    const [animated,setAnimated] = useState(false);
    useEffect(()=>{
        setAnimated(true);
    },[]);

    return (
        <div className="min-h-screen flex items-center justify-center" style={{background: '#1D3557'}}>
            <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="w-full md:w-2/5">
                    <LazyLoadImage src={content.header.img} effect="blur"
                        placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
                    />
                </div>
                <div className="text-white font-robotoSlab text-center">
                    <h2 className={`${animated?'':'translate-y-10 opacity-0'} transform transition duration-1000 ease-in-out text-3xl md:text-5xl  font-bold font-bonheurRoyale`}>
                        {content.header.text[0]}
                        <br/>
                        {content.header.text[1]}
                    </h2>
                    <h1 className={`${animated?'':'translate-y-10 opacity-0'} transform transition duration-1000 ease-in-out font-bold text-xl`}>
                        {content.header.text[2]}
                        <span style={{color:'#E63946'}}>
                            <Typical
                                steps={content.header.typical}
                                loop={Infinity}
                                className="inline-block"
                            />
                        </span>
                    </h1>
                    <Link to="stack" smooth={true}>
                        <button style={{background: '#E63946'}} className="px-10 py-3 text-xl uppercase rounded-lg mt-10 animate-float">
                            {content.header.btnText}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}