"use client";

import React, {useState} from "react";

interface AccordionItemProps {
    title: string;
    content: any[];
}

const SubAccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div>
            {/*<span className="text-black text-xl">Swagger Title</span>*/}
            <div className="border rounded-lg shadow mt-2">
                <button
                    className="w-full flex justify-between items-center p-4 bg-gray-200 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="font-semibold"><span className="bg-green-500 p-2 rounded">POST</span> {title}</span>
                    <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                {isOpen && (
                    <div className="p-4 bg-white">
                        <div className="parameters flex justify-between items-center pb-2 pr-2">
                            <h6 className="text-small font-bold">Parameters</h6>

                            <button
                                className="outline-4 outline-black border-black border-2 p-1 hover:scale-105 rounded text-[1rem]">Try
                                it out
                            </button>
                        </div>

                        <div>
                            <form className="space-y-8">
                                {/* Authorization Section */}
                                <div className="w-full flex items-start space-x-4">
                                    {/* Authorization Details */}
                                    <div className="w-1/5 text-xl p-4 font-medium text-gray-700 rounded-md">
                                        <span className="text-sm">
                                            Authorization <sup className="text-red-700">required*</sup> <br/>
                                            <span className="italic">String (header)</span>
                                        </span>
                                    </div>

                                    {/* Authorization Input Field */}
                                    <div className="w-2/3">
                                        <label
                                            htmlFor="authorization-input"
                                            className="block text-sm font-medium text-gray-700 pb-2"
                                        >
                                            Authorization
                                        </label>
                                        <input
                                            type="text"
                                            id="authorization-input"
                                            className="block p-3 w-full rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Enter authorization token"
                                        />
                                    </div>
                                </div>

                                {/* Mid Section */}
                                <div className="w-full flex items-start space-x-4">
                                    {/* Mid Details */}
                                    <div className="w-1/5 text-xl p-4 font-medium text-gray-700 rounded-md">
                                        <span className="text-sm">
                                            Mid <sup className="text-red-700">required*</sup> <br/>
                                            <span className="italic">String (header)</span>
                                        </span>
                                    </div>

                                    {/* Mid Input Field */}
                                    <div className="w-2/3">
                                        <label
                                            htmlFor="mid-input"
                                            className="block text-sm font-medium text-gray-700 pb-2"
                                        >
                                            Mid
                                        </label>
                                        <input
                                            type="text"
                                            id="mid-input"
                                            className="block p-3 w-full rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Enter Mid value"
                                        />
                                    </div>
                                </div>


                                {/* Mid Section */}
                                <div className="w-full flex items-start space-x-4">
                                    {/* Mid Details */}
                                    <div className="w-1/5 text-xl p-4 font-medium text-gray-700 rounded-md">
                                        <span className="text-sm">
                                            Request <sup className="text-red-700">required*</sup> <br/>
                                            <span className="italic">String (header)</span>
                                        </span>
                                    </div>

                                    {/* Mid Input Field */}
                                    <div className="w-2/3">
                                        <label
                                            htmlFor="mid-input"
                                            className="block text-sm font-medium text-gray-700 pb-2"
                                        >
                                            Mid
                                        </label>
                                        <textarea
                                            id="request-input"
                                            style={{height: '100px'}}
                                            className="block p-3 w-full rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={"{userEmail:null,\n userPassword:null \n}"}
                                        />
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="parameters flex justify-between items-center pb-2 pr-2">
                            <h6 className="text-small font-bold">Response</h6>

                            {/*<button*/}
                            {/*    className="outline-4 outline-black border-black border-2 p-1 hover:scale-105 rounded text-[1rem]">Try*/}
                            {/*    it out*/}
                            {/*</button>*/}
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};


const AccordionItem: React.FC<AccordionItemProps> = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div>
            {/*<span className="text-black text-xl">Swagger Title</span>*/}
            <div className="mt-2">
            <button
                    className="w-full flex justify-between items-center p-4 bg-gray-100 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="font-semibold">{title}</span>
                    <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                {isOpen && (
                    <div className="p-2 bg-white">
                        {content.map((item, index) => (
                            <SubAccordionItem
                                key={index}
                                title={item.title}
                                content={item.content}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>

    );
};
const Accordion: React.FC = () => {
    const accordionData = [
        {
            title: "Swagger Title", content: [
                {title: "Sub Swagger Title", content: "This is the content of Item 1."},
                {title: "Sub Swagger Title", content: "This is the content of Item 2."},
                {title: "Sub Swagger Title", content: "This is the content of Item 3."},
            ]},
        {title: "Swagger Title", content: [
                {title: "Sub Swagger Title", content: "This is the content of Item 1."},
                {title: "Sub Swagger Title", content: "This is the content of Item 2."},
                {title: "Sub Swagger Title", content: "This is the content of Item 3."},
            ]},
        {title: "Swagger Title", content:[
                {title: "Sub Swagger Title", content: "This is the content of Item 1."},
                {title: "Sub Swagger Title", content: "This is the content of Item 2."},
                {title: "Sub Swagger Title", content: "This is the content of Item 3."},
            ]},
    ];
    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-5 space-y-4">
            <div>
                <h2 className="text-2xl">PwbTmsSwitch Documentation <sup className="bg-gray-700 p-1 text-sm text-white rounded">1.0.0</sup></h2>
                <span className="text-sm underline text-blue-600">[ Base URL: tms-api-prod.corestepbank.com/ ]</span>
                <p className="text-sm mt-3">PwbTmsSwitch Documentation</p>
            </div>

            {accordionData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
}

export default Accordion


