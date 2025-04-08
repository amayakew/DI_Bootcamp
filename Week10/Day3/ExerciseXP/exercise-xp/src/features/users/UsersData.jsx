import { useSelector, useDispatch } from "react-redux";
import { fetchUsersData } from "./usersSlice";
import { useEffect } from "react";

const UsersData = () => {
    const users = useSelector((state) => state.usersReducer.users);
    const status = useSelector((state) => state.usersReducer.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersData())
    },[]);

    if (status === 'failed'){
        return <h2>Something went wrong, try later..</h2>
    };

    return(
        <>
            <h2>Users Info:</h2>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <p><strong>Name:</strong> {user.name} <strong>Email:</strong> {user.email}</p>
                        </div>
                    )
                })
            }
        </>
    );
};

export default UsersData;