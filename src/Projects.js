import { projectData } from "./data/projects"
import GithubLogo from "./data/icons/github.svg"

export const Projects = () => {
    return (
        <div>
            <h3 className="subtitle">Web</h3>
            <div className="projects">
                {projectData.filter(project => !project.mobile).map((project, index) =>
                    <div className="project" key={index}>
                        { project.mobile
                            ?
                                <div className="project-image-mobile-container">
                                    <a href={project.link} target="_blank">
                                        <img className='project-image-mobile' src={require(`${project.imgSource}`)}></img>
                                    </a>
                                </div>
                            :
                                <a href={project.link} target="_blank">
                                    <img className='project-image' src={require(`${project.imgSource}`)}></img>
                                </a>
                        }
                        <div className={`project-name ${project.mobile && 'project-name-mobile'}`}>{project.displayName}</div>
                        <p className={`project-tagline ${project.mobile && 'project-tagline-mobile'}`}>{project.tagline}</p>
                        <div className={`github-icon-container ${project.mobile && 'github-icon-container-mobile'}`}>
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
                    <div className="project" key={index}>
                        { project.mobile
                            ?
                                <div className="project-image-mobile-container">
                                    <a href={project.link} target="_blank">
                                        <img className='project-image-mobile' src={require(`${project.imgSource}`)}></img>
                                    </a>
                                </div>
                            :
                                <a href={project.link} target="_blank">
                                    <img className='project-image' src={require(`${project.imgSource}`)}></img>
                                </a>
                        }
                        <div className={`project-name ${project.mobile && 'project-name-mobile'}`}>{project.displayName}</div>
                        <p className={`project-tagline ${project.mobile && 'project-tagline-mobile'}`}>{project.tagline}</p>
                        <div className={`github-icon-container ${project.mobile && 'github-icon-container-mobile'}`}>
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
