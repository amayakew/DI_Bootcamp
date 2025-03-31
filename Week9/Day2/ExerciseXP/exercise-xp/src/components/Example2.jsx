// Skills
import React from "react";
import data from '../data/data.json';

class Example2 extends React.Component {
    render(){
        return(
            <>
                {data.Skills.map((skillItem, index) => (
                    <div key={index}>
                        <p style={{fontWeight: "bold"}}>{skillItem.Area}</p>
                        <ul>
                            {skillItem.SkillSet.map((skill, innerIndex) => (
                                <li key={innerIndex}>{skill.Name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </>
        );
    };
};

export default Example2;