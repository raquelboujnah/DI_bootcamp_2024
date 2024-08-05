import data from '../data2.json';
import React from 'react'
import { Link } from "react-router-dom";

class Example3 extends React.Component{
    render() {
        console.log(data.Experiences);
        return (
        <div>
            <h1>Experiences</h1>
            {data.Experiences.map((experience, index) => (
                <div key={index}>
                    <img src={experience.logo}/> 
                    <br/>
                    <Link to={experience.url}>{experience.companyName}</Link>

                    {experience.roles.map((role, index) => (
                        <div key={index}>
                            <p>{role.title}</p>
                            <p>{role.description}</p>
                            <p>{role.startDate}</p>
                            <p>{role.endDate}</p>
                            <p>{role.location}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        );
    }
}
export default Example3