const User = (props) => {
    console.log(props);
    let style = {
        display: "inline-block",
        boder: "1px solid black",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        backgroundColor: "blue"
    }
    return (
        <div style={style}>
        <h2>{props.info.name}</h2>
        <h2>{props.info.username}</h2>
        <p>{props.info.email}</p>
        </div>
    );
};

export default User