import { projectData } from "./data/projects"

export const Projects = () => {
    console.log(projectData)
    return (
        <>
            {projectData.map((project, index) => 
                <div className="project" key={index}>
                    <a href={project.link} target="_blank">
                        <img src={require(`${project.imgSource}`)}></img>
                    </a>
                    <p>{project.displayName}</p>
                    <p>{project.tagline}</p>
                </div>
            )}
        </>
    )
}