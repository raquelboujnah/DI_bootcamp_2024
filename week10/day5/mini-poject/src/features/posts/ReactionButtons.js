import { addOne } from "./postSlice";
import { useDispatch } from "react-redux";
import { memo } from "react";

const ReactionButton = (props) => {
    const dispatch = useDispatch()
    const {id, reactions} = props.post;
    const reactionEmoji = {
        thumbsUp: "👍",
        wow: "😮",
        heart: "❤️",
        rocket: "🚀",
        coffee: "☕",
    };

    const increment = (name) => {
        dispatch(addOne({id, name}))
    }

    const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return(
            <button onClick={() => increment(name)} key={name} className="reactionButton">{emoji} {reactions[name]}</button>
        );
    });

    return(
        <div>{renderReaction}</div>
    );
};

export default memo(ReactionButton);