interface UserProps {
    name?: string;
    age?: number;
    role?: string;
}

const UserCard = ({name = 'anonymous', age = 0, role = 'no data'}: UserProps) => {
    return (
        <>
            <p><strong>{name}</strong></p>
            <p>Age: {age ? age : 'no data'}</p>
            <p>Position: {role}</p>            
        </>
    );
};

export default UserCard;