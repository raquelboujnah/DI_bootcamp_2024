import { useState } from "react";

const Form = () => {
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    const handleInputs = (e) => {        
            const value = e.target.type === 'checkbox' ? e.target.checked: e.target.value;
            setInputs({...inputs, [e.target.name]: value})
        }
        
    return (
        <>
            <form onSubmit={handleChange}>
                <input type="text" name="firstName" onChange={(e) => handleInputs(e)} placeholder="First Name"/>
                <br/>
                <input type="text" name="lastName" onChange={(e) => handleInputs(e)} placeholder="Last Name"/>
                <br/>
                <input type="text" name="age" onChange={(e) => handleInputs(e)} placeholder="Age"/>
                <br/>
                <br/>
                <input type="radio" name="gender" onChange={(e) => handleInputs(e)} value="male"/>Male
                <br/>
                <input type="radio" name="gender" onChange={(e) => handleInputs(e)} value="female"/>Female
                <br/>
                <br/>
                <select name="destination" onChange={(e) => handleInputs(e)}>
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option><option value="Brazil">Brazil</option>
                </select>
                <br/>
                <br/>
                <div >
                    <input type="checkbox" name="nutsFree" onChange={(e) => handleInputs(e)}/><span>Nuts free</span>
                    <br/>
                    <input type="checkbox" name="lactoseFree" onChange={(e) => handleInputs(e)}/><span>Lactose free</span>
                    <br/>
                    <input type="checkbox" name="isVegan" onChange={(e) => handleInputs(e)}/><span>Vegan</span>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>Entered information:</h2>
                <p>Your name: {inputs?.firstName}</p>
                <p>Your age: {inputs?.age}</p>
                <p>Your gender: {inputs?.gender}</p>
                <p>Your destination: {inputs?.destination}</p>
                <p>Your dietary restrictions:</p>
                <div >
                    <span>**Nuts free : {(inputs?.nutsFree)? 'Yes': 'No'}</span> 
                    <br/>
                    <span>**Lactose free : {(inputs?.lactoseFree)? 'Yes': 'No'}</span> 
                    <br/>
                    <span>**Vegan meal : {(inputs?.isVegan)? 'Yes': 'No'}</span>
                </div>
            </div>
        </>
    )
}

export default Form