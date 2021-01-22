import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect (() => {
        sanityClient.fetch(`*[_type=="project"]{
            title,
            date,
            place,
            description,
            languages,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-gray-300 min-h-screen p-12">
            <section className="container mx-auto">
                <section className="grid grid-cols-2 gap-8 opacity-100">
                    {projectData && projectData.map((project, index) => (
                    <article key={index} className="relative rounded-lg shadow-2xl bg-white p-16 opacity-80 hover:opacity-100">
                        <h3 className="text-yellow-800 text-3xl font-bold mb-2">
                            {project.title}
                        </h3>
                        <div className="text-gray-500 text-sx space-x-4 justify-between">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Location</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                        </div>
                        <div className="text-gray-500 text-sx space-x-4">
                            <span className="justify-self-start">
                                <strong className="font-bold"> Languages</strong>:{" "}
                                {project.languages.join()}
                            </span>
                            <ul className="my-6 text-lg text-gray-800 leading-relaxed list-disc">
                                {project.description.map(desc => <li> {desc} </li>)}
                            </ul>
                        </div>
                        <div className="relative bottom-0 left-0 right-0">
                            {project.link ? 
                                <a
                                    href={project.link}
                                    target="_blank"
                                    title="View Source Code"
                                    rel="noopener noreferrer"
                                    data-position="top"
                                    data-tooltip="View Source Code"
                                    className="relative cursor-pointer inline-block overflow-hidden align-middle z-1
                                    shadow-inner p-0 bg-clip-padding rounded-full w-12 h-12 select-none text-red-500 hover:text-red-700"
                                >
                                    <FontAwesomeIcon icon={faGithub} size="3x">
                                    </FontAwesomeIcon>
                                </a>
                                : <p> </p> }
                        </div>
                    </article>
                    ))}
               </section>                    
            </section>
        </main>
    )
}