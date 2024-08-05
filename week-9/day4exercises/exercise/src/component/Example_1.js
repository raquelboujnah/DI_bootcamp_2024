import data from '../data2.json';
import React from 'react'

class Example1 extends React.Component{
    render() {
        return (
        <div>
            <h1>Social Medias</h1>
            {data.SocialMedias.map((link, index) => (
                <div key={index}>
                    <p>{link}</p>
                </div>
            ))}
        </div>
        );
    }
}

export default Example1