import {useAddReaction} from './state/hooks';
import {memo} from 'react';
// import { addreaction } from "./state/slice"; ---> hook
// import {useDispatch} from 'react-redux'; ---> hook

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤",
    rocket: "🚀",
    coffee: "☕",
};
// 1st: add the object to each post, as we want to change count separately --> slice --> fulfilled

const ReactionButton = ({id,reactions}) => {
    // const dispatch = useDispatch();
    const callAddReaction = useAddReaction();

    const renderReactions = Object.entries(reactionEmoji).map(([name,emoji]) => {
        // Object.entries(object) creates an array with arrays/entries, 
        // where each entrie = aray with key and value (name and emoji), so we destructure array..
        return (
            // <button key={name} className="reactionButton" onClick={() => dispatch(addreaction({id,name}))}>
            <button key={name} className="reactionButton" onClick={() => callAddReaction(id,name)}>
                {emoji} {reactions[name]}
                {/* dinamic key [] --> inside is variable through which i can get key */}
                {/* to add action we need post id and emoji name */}
            </button>
        );
    });
    return (
        <>
            <div>{renderReactions}</div>
        </>
    )
};

// export default ReactionButton;
export default memo(ReactionButton);
// to not render all reactions every time, 
// if there is no changes in them, and render only the reaction where there is change. 
// But it's costing us resources.

// another option: 
// const ReactionButton = ({post}) => {
//      const {id, reactions} = post;
// }