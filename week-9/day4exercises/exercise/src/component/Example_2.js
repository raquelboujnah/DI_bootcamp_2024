import data from '../data2.json';
import React from 'react'

class Example2 extends React.Component{
    render() {
        console.log(data.Skills);
        return (
            <div>
                <h1>Skills</h1>
                {data.Skills.map((skill, index) => (
                    <div key={index}>
                        <h4>{skill.Area}</h4>
                        {skill.SkillSet.map((lang, index) => (
                            <div key={index}>
                                <p>{lang.Name}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
export default Example2