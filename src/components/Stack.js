import React from 'react'
import content from '../content'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Stack() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-robotoSlab" style={{ background: '#edf2fb' }} id="stack">
            <h1 className="text-5xl font-bold">The tech I use</h1>
            <div className="flex flex-wrap justify-center mt-10">
                {content.tech1.tech.map((tech, index) => {
                    return (
                        <span className={`${index % 2 === 0 ? "animate-float" : "animate-refloat"} w-40 h-40 bg-white shadow-xl m-2 rounded-full flex items-center p-6`}>
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        </span>
                    );
                })}
            </div>
            <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">{content.tech1.desc}</p>
        </div>
    )
}