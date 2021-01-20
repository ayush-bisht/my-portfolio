import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import {urlFor} from "./SinglePost.js";
import background from "../background.png";
import authorPic from "../aimg.jpg";

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type=="author"]{
            name,
            bio,
            "authorImage": image.assest->url
        }`).then((data)=> setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>;

    return (
        <main>
            <img
                src={background} 
                alt="background here" className="absolute object-cover w-full h-full"/>
            <div className="p-20 lg:pt-48 container mx-auto relative">
                <section className="rounded-lg shadow-2xl lg:flex p-2 overflow-hidden">
                    {urlFor(author.authorImage).url() ?
                        <img src={urlFor(author.authorImage).url()}
                            className="rounded w-36 h-36 lg:w-96 lg:h-96 mr-8"
                            alt={author.name}
                        /> :
                        <img src={authorPic}
                            className="rounded w-36 h-36 lg:w-96 lg:h-96 mr-2"
                            alt={author.name}
                        /> } 
                    <div className="text-lg flex flex-col justify-center pl-10 lg:pl-20">
                        <h2 className="font-mono font-bold text-5xl text-green-600 mb-4">
                            {author.name}
                        </h2>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent 
                                blocks={author.bio}
                                projectId="x002d2fa"
                                dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}