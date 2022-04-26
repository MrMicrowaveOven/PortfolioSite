import './css/skills.css'
import { skillData } from './data/skills';

export const Skills = () => {
    return skillData.map((skill, index) =>
        <div className="skill" key={index}>
            <a href={skill.link} target="_blank">
                <img className="skill-icon" src={require(`${skill.imgSource}`)}/>
            </a>
            <h3>{skill.displayName}</h3>
      </div>
    )
}