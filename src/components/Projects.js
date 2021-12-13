import React from 'react'
import content from '../content'


export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-robotoSlab" id="projects">
            <h1 className="text-3xl font-bold pt-5 pb-2 md:pb-5 text-center">Some Of My Projects</h1>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.myProject.projects.map((project, index) => {
                        return (
                            <div className="rounded-lg p-6 shadow-md" style={{ background: '#edf2fb' }}>
                                <div className="flex items-center space-x-6 mb-4">
                                    <div>
                                        <p className="text-xl font-normal mb-1" style={{color: '#E63749'}}>{project.name}</p>
                                        <a target="_blank" rel="noopener noreferrer" href={project.link}>
                                            <p className="text-base text-blue-600 font-normal underline">{project.link}</p>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-700 leading-loose font-normal text-base">{project.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}