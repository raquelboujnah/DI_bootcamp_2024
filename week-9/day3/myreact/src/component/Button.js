const Button = ({setCount}) => {
    return (
        <>
            <button onClick={()=>setCount((count) => count + 1)}>+</button>
        </>
    );
};

export default Button