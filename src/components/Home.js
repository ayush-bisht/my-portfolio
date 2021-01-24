import React from "react";
import homeImage from "../img2.png"
export default function Home() {
    return (
        <main className="relative">
            <img 
                src={homeImage}
                alt='Nothing to show.'
                className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-80 lg:pt-80 px-8">
                <div className="font-serif font-semibold text-3xl z-1 text-white text-center">
                        Hi! I'm
                        <span className="text-red-500"> Ayush Bisht</span>
                        .
                        <br/>
                        I'm a software developer who wants
                        <br/>
                        to build things that make a difference.
                    </div>
            </section>
            {/* <section id="home" className="section flex justify-center">
                <div className="flex items-center flex-col justify-center">
                    <div className="font-serif font-semibold text-3xl z-1 text-white text-center">
                        Hi! I'm
                        <span className="text-red-500"> Ayush Bisht</span>
                        .
                        <br/>
                        I'm just a software developer who wants
                        <br/>
                        to make things that make a difference.
                    </div>
                </div>
            </section> */}
            {/* <section className="overflow-x-hidden container m-0 w-full flex height-fix">
                <div className="bg-gray-500">
                    <img src={homeImage}
                        alt='Nothing to see here'
                        className="object-center object-contain">
                    </img>
                </div>
                <div className="flex items-center flex-col justify-center">
                    <div className="font-serif font-semibold text-3xl z-1">
                        Hi! I'm
                        <span className="text-red-500"> Ayush </span>
                        .
                        <br/>
                        I'm just a software developer who loves
                        <br/>
                        to make things that make a difference
                    </div>
                </div>
            </section> */}
        
        </main>
    )
}