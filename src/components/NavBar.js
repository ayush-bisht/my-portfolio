import React from "react";
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar() {
    return (
        <header className="nav-bar">
            <div className="container mx-auto flex justify-between">
                <nav className="flex"> 
                    <NavLink to="/" exact 
                        activeClassName="text-green-500"
                        className="inflex-flex items-center py-8 px-3 mr-4 text-white hover:text-green-500 text-2xl font-bold"
                    >
                        AYUSH BISHT
                    </NavLink>
                    <NavLink to="/post" 
                        activeClassName="text-green-500"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-500">
                        BLOG POSTS
                    </NavLink>
                    <NavLink to="/project" 
                        activeClassName="text-green-500"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-500">
                        PROJECTS
                    </NavLink>
                    <NavLink to="/about" 
                        activeClassName="text-green-500"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-500">
                        ABOUT ME
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/ayush-bisht-b41130191/" className="mr-4 border-2 border-white border-solid rounded-full" 
                                target="_blank" fgColor="#fff" bgColor="#2C3E50" style={{height:35, width:35}} />
                    <SocialIcon url="https://www.facebook.com/ayush.bisht.756/" className="mr-4  border-2 border-white border-solid rounded-full"
                                target="_blank" fgColor="#fff" bgColor="#2C3E50" style={{height:35, width:35}} />
                    <SocialIcon url="https://www.instagram.com/ayush.bisht/" className="mr-4  border-2 border-white border-solid rounded-full" 
                                target="_blank" fgColor="#fff" bgColor="#2C3E50" style={{height:35, width:35}} />
                </div>
            </div>
        </header>
    )
}