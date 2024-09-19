import { projectData } from "./data/projects"
import GithubLogo from "./data/icons/github.svg"

export const Projects = () => {
    return (
        <div>
            <h3 className="subtitle">Web</h3>
            <div className="projects">
                {projectData.filter(project => !project.mobile).map((project, index) =>
                    <div className="project" key={index}>
                        <a href={project.link} target="_blank">
                            <img className='project-image' src={require(`${project.imgSource}`)}></img>
                        </a>
                        <div className={`project-name`}>{project.displayName}</div>
                        <p className={`project-tagline`}>{project.tagline}</p>
                        <div className={`github-icon-container`}>
                            <a href={project.github} target="_blank">
                                <img className="github-icon" src={GithubLogo}></img>
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <h3 className="subtitle">Mobile</h3>
            <div className="projects">
                {projectData.filter(project => project.mobile).map((project, index) =>
                    <div className="project project-mobile" key={index}>
                        <a href={project.link} target="_blank">
                            <img className='project-image-mobile' src={require(`${project.imgSource}`)}></img>
                        </a>
                        <div className={`project-name project-name-mobile`}>{project.displayName}</div>
                        <p className={`project-tagline project-tagline-mobile`}>{project.tagline}</p>
                        <div className={`github-icon-container github-icon-container-mobile`}>
                            <a href={project.github} target="_blank">
                                <img className="github-icon" src={GithubLogo}></img>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
