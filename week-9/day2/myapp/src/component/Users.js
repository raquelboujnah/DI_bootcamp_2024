const User = (props) => {
    const { id, name, username, email } = props;
    return(
        <div>
            <img src={`https://robohash.org/${id}?size=150x150`}/>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
        </div>
    );
};

export default User