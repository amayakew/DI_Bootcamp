import UserCard from "./UserCard";

const Users = () => {
    return (
        <>
            <h4 style={{textDecoration: 'underline blue 2px'}}>Exercise 4</h4>
            <h3>Users Info:</h3>
            <UserCard name='Anna' role='Manager'/>
            <UserCard name='Ken' age={22} role='Junior Developer'/>
            <UserCard role='HR'/>
        </>
    )
};

export default Users;