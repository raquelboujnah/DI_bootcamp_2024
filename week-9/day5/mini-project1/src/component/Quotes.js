import quotes from '../quotes.json';
import {useState} from 'react'

const Quotes = () =>{
    const [quote, setQuote] = useState(quotes[0])
    const [color, setColor] = useState('red')
    
    const randomQuotes = () => {
        const Shown = []
        if (Shown.length === quotes.length){
            const end = {quote: 'It is finished.', author: 'Jesus Christ'}
            setQuote(end)
            
        }else{
            let randomElement;
            do {
                randomElement = quotes[Math.floor(Math.random() * quotes.length)];
            } while (Shown.includes(randomElement));
            Shown.push(randomElement)
            setQuote(randomElement);
            changeColor();
        }
    }

    const changeColor = () => {
        const color = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#808080", "#800000", "#808000", "#800080", "#008080", "#000080", "#FFA500", "#FFC0CB", "#A52A2A", "#FFD700", "#FF7F50", "#4B0082", "#EE82EE", "#40E0D0", "#FA8072", "#F0E68C", "#E6E6FA", "#F5F5DC", "#00FF00", "#DC143C", "#708090", "#8B0000", "#006400", "#00008B", "#D3D3D3", "#F08080", "#20B2AA", "#87CEFA", "#FAFAD2", "#778899", "#B0C4DE"]
        const randomColor = color[Math.floor(Math.random() * color.length)];
        setColor(randomColor)
    }

    return (
        <div className='background' style={{backgroundColor: color}}>
            <div className='box'>
                <h1 className='textQuote' style={{color: color}}>"{quote.quote}"</h1>
                <p className='author' style={{color: color}}>-{quote.author}-</p>
                <button onClick={randomQuotes} className='button' style={{backgroundColor: color}}>New quote</button>
            </div>
        </div>
        
    )
} 

export default Quotes