import { algorithmData } from "./data/algorithms"
import GithubLogo from "./data/icons/github.svg"

export const Algorithms = () => {
    return (
        <div>
            <p className="about-text">
                These are just some fun things I wrote in passing.  Generally it's when there's a riddle I can't solve, or some statistical anomaly I don't understand.  Don't worry if you're not a coder!  They should still be an interesting read.
            </p>
            <div className="algorithms">
                {algorithmData.map((algorithm, index) => {
                    return (
                        <div className="algorithm-margin" key={index}>
                            <a style={{"textDecoration": "none"}} href={algorithm.link} target="_blank">
                                <div className="algorithm">
                                    <div className="algorithm-name">{algorithm.displayName}</div>
                                    <div className="algorithm-description">{algorithm.description}</div>
                                    <div className="github-icon-container">
                                        <img className="github-icon" src={GithubLogo} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}