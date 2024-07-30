import "./exercise.css";

function Exercise() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
      return (
        <>
        <h1 style={style_header}>This is a header</h1>
        <p className="para" >This is a paragraphe</p>
        <form>
            This is a form
            <input type="text" placeholder="Enter your name"></input>
        </form>
        <img src="https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg?t=st=1722189732~exp=1722193332~hmac=88f44d18d0e6122776e5b63ec006a7ec464ca85e1899838a764c4034e4779f20&w=740">Here is an image</img>
        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
        </>
      )
}

export default Exercise