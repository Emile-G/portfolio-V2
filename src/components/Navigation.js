import React from 'react'
import content from '../content'
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div style={{ background: '#1D3557' }}>
            <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-robotoSlab">
                <h1 className="text-4xl font-bold font-bonheurRoyale">
                    {content.nav.logo}
                    <span style={{ background: '#E63946' }} className="w-3 h-3 rounded-full inline-block ml-1"></span>
                </h1>
                <div>
                    {content.nav.links.map((link, index) => {
                        return (
                            <Link to={link.to}>
                                <span key={index} className="text-2xl mr-4">{link.text}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}