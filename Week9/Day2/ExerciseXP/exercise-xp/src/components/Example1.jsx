// Social Medias
import React from "react";
import data from '../data/data.json';

class Example1 extends React.Component {
    render(){
        return(
            <>
                <ul>
                    {data.SocialMedias.map((media, index) => (
                        <li key={index}>{media}</li>
                    ))}
                </ul>
            </>
        );
    };
};

export default Example1;