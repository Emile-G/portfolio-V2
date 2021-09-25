import react from "react"
import content from '../content'

export default function Education() {
    const [openTab, setOpenTab] = react.useState(1);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-robotoSlab" style={{ background: '#edf2fb' }} id="studies">
            <div className="w-11/12 md:max-w-3xl text-xl text-center">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                    <div className="px-4 py-5 flex-auto">
                        <div class="bg-gray-50 shadow overflow-hidden sm:rounded-t-lg">
                            {content.studies.study.map((studyMap, index) => {
                                return (
                                    <div className={openTab === index + 1 ? "block" : "hidden"} id={'link' + (index + 1)}>
                                        <div class="px-4 py-5 sm:px-6">
                                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                                {studyMap.diploma}
                                            </h3>
                                            <p class="mt-1 max-w-2xl text-sm text-gray-900">
                                                {studyMap.fullDiplomaName}
                                            </p>
                                        </div>
                                        <div class="border-t border-b border-gray-200">
                                            <dl>
                                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt class="text-sm font-medium text-gray-500">
                                                        Years :
                                                    </dt>
                                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        {studyMap.years}
                                                    </dd>
                                                </div>
                                                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt class="text-sm font-medium text-gray-500">
                                                        At :
                                                    </dt>
                                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        {studyMap.school}
                                                    </dd>
                                                </div>
                                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt class="text-sm font-medium text-gray-500">
                                                        School Address :
                                                    </dt>
                                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        {studyMap.address}
                                                    </dd>
                                                </div>
                                                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt class="text-sm font-medium text-gray-500">
                                                        Website :
                                                    </dt>
                                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 underline">
                                                        <a target="_blank" rel="noopener noreferrer"  href={studyMap.webisteData}>
                                                            {studyMap.website}
                                                        </a>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div class="bg-gray-50 shadow overflow-hidden sm:rounded-b-lg">
                            <div class="px-4 py-5 sm:px-6">
                                <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                                    {content.studies.study.map((studyMap2, index) => {
                                        return (
                                            <li className="-mb-px mr-2 pt-2 md:pt-0 last:mr-0 flex-auto text-center">
                                                <a className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                                    style={(openTab === (index + 1)
                                                        ? { color: 'white', background: '#E63749' }
                                                        : { color: '#E63749', background: 'white' }
                                                    )}
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        setOpenTab(index + 1);
                                                    }}
                                                    data-toggle="tab" href={'#link' + (index + 1)} role="tablist">
                                                    {studyMap2.diploma}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};