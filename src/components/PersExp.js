import React from 'react'
import content from '../content'


export default function PersExp() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-robotoSlab" style={{ background: '#edf2fb' }} id="persExp">
            <h1 className="text-3xl font-bold pt-5 pb-2 md:pb-5 text-center">My Personnal Experiences</h1>

            {content.personnalExp.experiences.map((persExp, index) => {
                return (
                    <div className="mb-3 p-5 md:p-2">
                        <div class="bg-white rounded-xl shadow-2xl">
                            <img src={persExp.image} alt="boy with camera" class="rounded-t-xl w-full object-cover" />
                            <div class="p-5">
                                <div className="flex-1 ml-2 mb-1 text-lg font-medium divide-x-2 divide-niceRed">
                                    <span className="pr-4">
                                        {persExp.project}
                                    </span>
                                    <span className="pl-4 text-gray-600">
                                        {persExp.type}
                                    </span>
                                </div>
                                <div className="flex-1 ml-2 mb-5 text-sm font-medium divide-x-2 divide-niceRed">
                                    <span className="pr-4">
                                        {persExp.postes}
                                    </span>
                                    <span className="pl-4 text-gray-600">
                                        {persExp.techUsed}
                                    </span>
                                </div>

                                <p>{persExp.desc}</p>
                                <p>{persExp.desc2}</p>
                                <p>{persExp.desc3}</p>
                                <div class="text-center">
                                    <a target="_blank" rel="noopener noreferrer" href={persExp.website}>
                                        <button class="mt-3 rounded-lg px-4 py-2 text-white shadow hover:shadow-xl duration-300" style={{ background: '#E63946' }}>
                                            Go to the demo
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}