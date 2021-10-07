import React from 'react';
import content from '../content';

export default function ProExp() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-robotoSlab" id="proExp">
            <h1 className="text-3xl md:text-5xl font-bold pt-5 md:pb-11 text-center">My Professional Experiences</h1>
            <div className="w-11/12 md:max-w-3xl text-xl mt-3">
                <ul className="list-none m-0 p-0">
                    {content.professionalExp.experiences.map((proExp, index) => {
                        return (
                            <li className="mb-4">
                                <div className="flex items-center mb-">
                                    <div className="rounded-full h-2 w-2 z-10" style={{ background: '#E63946' }}>
                                    </div>
                                    <div className="flex-1 ml-2 text-lg font-medium divide-x-2 divide-niceRed">
                                        <span className="pr-4">
                                            {proExp.dates}
                                        </span>
                                        <span className="pl-4">
                                            {proExp.postes}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-1 ml-4 text-base font-light">
                                    <span>
                                        {proExp.workplace} -
                                    </span>
                                    <span className="pl-1">
                                        {proExp.rank}
                                    </span>
                                </div>
                                <div className="flex-1 ml-4 text-sm font-medium underline">
                                    <span>
                                        Tasks :
                                    </span>
                                </div>
                                <div className="flex-1 ml-4 text-sm font-light">
                                    <span className="ml-4 flex">
                                        <div className="rounded-full h-2 w-2 z-10 mt-2" style={{ background: '#E63946' }}>
                                        </div>
                                        <div className="flex-1 ml-4">
                                            <span>
                                                {proExp.task1}
                                            </span>
                                        </div>
                                    </span>
                                </div>
                                <div className="flex-1 ml-4 text-sm font-light">
                                    <span className="ml-4 flex">
                                        <div className="rounded-full h-2 w-2 z-10 mt-2" style={{ background: '#E63946' }}>
                                        </div>
                                        <div className="flex-1 ml-4">
                                            <span>
                                                {proExp.task2}
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};