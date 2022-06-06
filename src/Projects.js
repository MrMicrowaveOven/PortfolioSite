import { projectData } from "./data/projects"
import GithubLogo from "./data/icons/github.svg"

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
                    <div className="github-icon-container">
                        <a href={project.github} target="_blank">
                            <img className="github-icon" src={GithubLogo}></img>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}
