import React from 'react'
import content from '../content'

export default function Links() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-robotoSlab" style={{ background: '#1D3557' }} id="studies">
            <div className="w-11/12 md:max-w-xl text-xl text-center">
                <div class="w-full">
                    <div className="relative group">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg filter blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover: duration-200"></div>
                        <div class="relative coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800  pb-6 rounded-lg leading-normal overflow-hidden">
                            <div class="top mb-2 flex">
                                <div class="h-3 w-3 rounded-full" style={{background: '#E63946'}}></div>
                                <div class="ml-2 h-3 w-3 rounded-full" style={{background: '#E9C46A'}}></div>
                                <div class="ml-2 h-3 w-3 rounded-full" style={{background: '#2A9D8F'}}></div>
                                <div class="mr-2 mx-auto font-bold text-base" style={{color: "#EEF3FB"}}>My links</div>
                            </div>
                            {content.links.socialMedia.map((socialMedia,index) => {
                                return (
                                    <div class="mt-4 flex text-xs md:text-sm">
                                        <span class="text-green-400">{socialMedia.title}:~$</span>
                                        <a target="_blank" rel="noopener noreferrer" href={socialMedia.link}>
                                            <p class="typing pl-2 underline">
                                                {socialMedia.link}
                                            </p>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}