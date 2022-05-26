import { skillData } from './data/skills';

export const Skills = () => {
    return skillData.map((skill, index) =>
        <div className="skill" key={index}>
            <a href={skill.link} target="_blank">
                <img className="skill-icon" src={require(`${skill.imgSource}`)}/>
            </a>
            <p className="skill-name">{skill.displayName}</p>
        </div>
    )
}
