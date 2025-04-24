import { ReactElement } from "react";

interface GreetingProps {
    name: string;
    messageCount: number;
}

const Greeting = ({name, messageCount}: GreetingProps): ReactElement => {
    return (
        <>
            <h4 style={{textDecoration: 'underline blue 2px'}}>Exercise 2</h4>
            <h3>Hi, {name} :)</h3>
            <p>Unread messages: {messageCount}</p>
        </>
    );
};

export default Greeting;