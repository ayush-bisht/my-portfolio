import React from "react";
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex"> 
                    <NavLink to="/" exact 
                        activeClassName="text-gray-500"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-gray-500 text-4xl font-bold tracking-widest"
                    >
                        Home
                    </NavLink>
                    <NavLink to="/post" 
                        activeClassName="text-gray-500"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-500">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" 
                        activeClassName="text-gray-500"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-500">
                        Projects
                    </NavLink>
                    <NavLink to="/about" 
                        activeClassName="text-gray-500"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-500">
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/ayush-bisht-b41130191/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                    <SocialIcon url="https://www.facebook.com/ayush.bisht.756/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                    <SocialIcon url="https://www.instagram.com/ayush.bisht/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                </div>
            </div>
        </header>
    )
}