// Experiences
// add key attr to every div
import React from "react";
import {Link} from 'react-router';
import data from '../data/data.json';

class Example3 extends React.Component {
    render(){
        return(
            <>
                {data.Experiences.map((company, index) => (
                    <div key={index}>
                        <img src={`${company.logo}`} style={{width: "200px", display: 'block'}}></img>
                        <Link to={`${company.url}`}>{company.companyName}</Link>
                        {company.roles.map((role, innerIndex) => (
                            <div key={innerIndex}>
                                <p style={{fontWeight: "bold", fontSize: "14px"}}>{role.title}</p>
                                <p>{role.startDate} {role.location}</p>
                                <p>{role.description}</p>   
                            </div>
                        ))}
                    </div>
                ))}
            </>
        );
    };
};

export default Example3;