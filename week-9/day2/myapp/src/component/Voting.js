import { useState } from "react";

const Voting = (props) => {
    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
    ]);

    const vote = (i) => {
        const newLanguages = [...languages]
        newLanguages[i].votes++
        setLanguages(newLanguages)
    }
    return (
        <>
            <h1>Vote for me</h1>
            {languages.map((item, i) => {
                return(
                    <div key={i}>
                        {item.name} {item.votes}
                        <button onClick={()=>vote(i)}>Vote!</button>
                    </div>
                );
            })}
        </>
    );
};


export default Voting