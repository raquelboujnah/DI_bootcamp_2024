import {useState, useEffect} from 'react';

const Calculator = () => {
    const [fnum, setFnum] = useState(0);
    const [snum, setSnum] = useState(0);
    const [result, setResult] = useState(0)

    useEffect(()=>{
    }, [])

    const getSum = () => {
        setResult(Number(fnum) + Number(snum))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getSum()
        setFnum('');
        setSnum('');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='fnum' className="fnum" value={fnum} placeholder="Enter a number" onChange={(e) => setFnum(e.target.value)}/>
                <input type='text' name='snum' className="snum" value={snum} placeholder="Enter a number" onChange={(e) => setSnum(e.target.value)}/>
                <input type='submit' className="button" value='Add them!'/>
            </form>
            <h2>{result}</h2>
        </div> 
    )
}

export default Calculator
