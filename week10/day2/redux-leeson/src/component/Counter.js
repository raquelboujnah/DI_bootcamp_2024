import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions";

const Counter = (props) => {
    return(
        <>
            <h2>Redux Counter</h2>
            <button onClick={()=> props.add()}> + </button>
            {props.count}
            <button onClick={()=> props.minus()}> - </button>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        add: () => dispatch(increment()),
        minus: () => dispatch(decrement())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);