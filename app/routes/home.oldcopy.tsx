import { useRef, useState } from "react";
import { Fa6SolidLink } from "~/components/icons/icons";

const OldCopy: React.FC = (): JSX.Element => {
    const nameRef = useRef<HTMLInputElement>(null);
    const mobileRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLTextAreaElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const uidRef = useRef<HTMLInputElement>(null);

    const villageRef = useRef<HTMLSelectElement>(null);
    const surveyRef = useRef<HTMLInputElement>(null);


    const typeOfInfoRef = useRef<HTMLSelectElement>(null);
    const remarkRef = useRef<HTMLTextAreaElement>(null);
    const applicationDateRef = useRef<HTMLInputElement>(null);
    const applicationNameRef = useRef<HTMLInputElement>(null);

    const [nakal, setNakal] = useState<File>();

    const agreeRef = useRef<HTMLInputElement>(null);
    const [sigimg, setSigimg] = useState<File>();

    return (
        <>
            <div className="bg-white rounded-md shadow-lg p-4 my-4 w-full">
                <h1 className="text-gray-800 text-3xl font-semibold text-center">Old Copy Of CP Maps OC</h1>
                <div className="w-full flex gap-4 my-4">
                    <div className="grow bg-gray-700 h-[2px]"></div>
                    <div className="w-10 bg-gray-500 h-[3px]"></div>
                    <div className="grow bg-gray-700 h-[2px]"></div>
                </div>
                <p className="text-center font-semibold text-xl text-gray-800"> SUBJECT  :  Application for grant of permission for Issuance of Old Copy Of CP Maps OC.</p>

                {/*--------------------- section 1 start here ------------------------- */}
                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white"> 1. Applicant Details(s) </p>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.1</span> Applicant Name
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <input
                            ref={nameRef}
                            placeholder="Applicant Name"
                            className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.2</span> Applicant address
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <textarea
                            ref={addressRef}
                            placeholder="Applicant address"
                            className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 h-28 resize-none"
                        ></textarea>
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.3</span> Applicant Contact Number
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <input
                            ref={mobileRef}
                            placeholder="Applicant Contact Number"
                            className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2"
                        />
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.4</span> Applicant Email
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <input
                            ref={emailRef}
                            placeholder="Applicant Email"
                            className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2"
                        />
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.5</span> Applicant UID
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <input
                            ref={uidRef}
                            placeholder="Applicant UID"
                            className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2"
                        />
                    </div>
                </div>
                {/*--------------------- section 1 end here ------------------------- */}

                {/*--------------------- section 2 start here ------------------------- */}
                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white"> 2. Land Details </p>
                </div>
                <div className="flex flex-wrap gap-4 gap-y-2 items-center px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700">
                        <span className="mr-2">2.1</span> Applicant village
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <select ref={villageRef} defaultValue={"0"} className="w-full bg-transparent fill-none outline-none border-2 border-black text-black p-2">
                            <option value="0" className="bg-white text-blakc text-lg" disabled>Select village</option>
                            <option value="1" className="bg-white text-black text-lg" >Dabhel</option>
                            <option value="2" className="bg-white text-black text-lg" >Jampor</option>
                            <option value="3" className="bg-white text-black text-lg" >Somnath</option>
                            <option value="4" className="bg-white text-black text-lg" >Jani vankad</option>
                            <option value="5" className="bg-white text-black text-lg" >Dholar</option>
                        </select>
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.2</span> Survey No
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <input
                            ref={surveyRef}
                            placeholder="Survey No"
                            className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2"
                        />
                    </div>
                </div>
                {/*--------------------- section 2 end here ------------------------- */}

                {/*--------------------- section 3 start here ------------------------- */}
                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white"> 3. Permisstion Details </p>
                </div>
                <div className="flex flex-wrap gap-4 gap-y-2 items-center px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700">
                        <span className="mr-2">3.1</span> Type of Information
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <select ref={typeOfInfoRef} defaultValue={"0"} className="w-full bg-transparent fill-none outline-none border-2 border-black text-black p-2">
                            <option value="0" className="bg-white text-blakc text-lg" disabled>Type Of Information</option>
                            <option value="1" className="bg-white text-black text-lg">Construction Permission</option>
                            <option value="2" className="bg-white text-black text-lg">Occupancy Certificate</option>
                            <option value="3" className="bg-white text-black text-lg">Maps</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">3.2</span> Information Needed
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <textarea
                            ref={remarkRef}
                            placeholder="Information Needed"
                            className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 h-28 resize-none"
                        ></textarea>
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">3.3</span> Previous application date
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <input
                            type="date"
                            ref={applicationDateRef}
                            className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2"
                        />
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">3.4</span> Previous application number
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <input
                            ref={applicationNameRef}
                            placeholder="Previous application number"
                            className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2"
                        />
                    </div>
                </div>
                {/*--------------------- section 3 end here ------------------------- */}

                {/*--------------------- section 4 start here ------------------------- */}

                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white"> 4. Docoument Attachment </p>
                </div>

                <div className="flex flex-wrap gap-4 gap-y-2 items-center px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700">
                        <span className="mr-2">4.1</span> 1/14 Nakal
                        <p className="text-rose-500 text-sm">
                            ( Maximum Upload Size 2MB & Allowed Format JPG / PDF / PNG )</p>
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <button
                            className="py-1 w-full sm:w-auto text-white text-lg px-4 bg-green-500 text-center rounded-md font-medium"
                        >
                            <div className="flex items-center gap-2">
                                <Fa6SolidLink></Fa6SolidLink> Attach Doc.
                            </div>
                        </button>
                    </div>
                </div>

                {/*--------------------- section 4 end here ------------------------- */}

                {/*--------------------- section 5 start here ------------------------- */}

                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white">
                        5. Applicant / Occupant Declaration and Signature </p>
                </div>

                <div className="flex gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="text-xl font-normal text-left text-gray-700 ">
                        5.1
                    </div>
                    <div className="flex items-start">
                        <input ref={agreeRef} type="checkbox" id="checkbox" className="mr-2 my-2" />
                        <label htmlFor="checkbox" className="text-xl font-normal text-left text-gray-700 ">
                            I solemnly affirm & hereby give undertaking that the above information furnished by me are correct and true to the best of my knowledge and belief
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 gap-y-2 items-center px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700">
                        <span className="mr-2">5.2</span> Applicant Signature Image
                        <p className="text-rose-500 text-sm">
                            ( Maximum Upload Size 2MB & Allowed Format JPG / PDF / PNG )</p>
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto">
                        <button
                            className="py-1 w-full sm:w-auto text-white text-lg px-4 bg-green-500 text-center rounded-md font-medium"
                        >
                            <div className="flex items-center gap-2">
                                <Fa6SolidLink></Fa6SolidLink> Attach Doc.
                            </div>
                        </button>
                    </div>
                </div>
                {/*--------------------- section 5 end here ------------------------- */}
                <div className="flex flex-wrap gap-6 mt-4">
                    <button
                        className="py-1 w-full sm:w-auto text-white text-lg px-4 bg-rose-500 text-center rounded-md font-medium"
                    >
                        Discard & Close
                    </button>
                    <button
                        className="py-1 w-full sm:w-auto text-white text-lg px-4 bg-green-500 text-center rounded-md font-medium"
                    >
                        Preview & Proceed
                    </button>
                </div>
            </div>
        </>
    );
}

export default OldCopy;