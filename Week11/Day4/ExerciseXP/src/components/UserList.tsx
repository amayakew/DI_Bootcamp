import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
    company: {name: string};
}

async function fetchData <T>(url: string): Promise<T[]> {
    const res = await fetch(url);
    const data = (await res.json()) as T[];
    return data;
};

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                const UsersData: User[] = await fetchData<User>('https://jsonplaceholder.typicode.com/users');
                setUsers(UsersData);
                setLoading(false);
            }
            catch (e){
                setError(`${e}`);
            };
        };
        fetchUsers();
    },[]);
    
    if (loading){
        return <h3>Loading...</h3>;
    };

    if (error){
        return <h3>Error: {error}</h3>;
    };

    return (
        <>
            <h4 style={{textDecoration: 'underline blue 2px'}}>Exercise 5</h4>
            <h3>Users List</h3>
            <div>
                {users?.map(user => {
                    return (
                        <div key={user.id} style={{border: '1px solid black', marginTop: '10px', width: '100%'}}>
                            <p><strong>Name: </strong>{user.name}</p>
                            <p><strong>Email: </strong>{user.email}</p>
                            <p><strong>Company: </strong>{user.company.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default UserList;