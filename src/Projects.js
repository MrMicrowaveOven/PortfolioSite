import { projectData } from "./data/projects"

export const Projects = () => {
    return (
        <div className="projects">
            {projectData.map((project, index) => 
                <div className="project" key={index}>
                    <a href={project.link} target="_blank">
                        <img className="project-image" src={require(`${project.imgSource}`)}></img>
                    </a>
                    <div className="project-name">{project.displayName}</div>
                    <p className="project-tagline">{project.tagline}</p>
                </div>
            )}
        </div>
    )
}