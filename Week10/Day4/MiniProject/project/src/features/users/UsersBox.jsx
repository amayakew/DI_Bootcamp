import { useEffect } from "react";
import {
  useFetchUsers,
  useUsersSelector,
  useSelectAuthor,
} from "./state/hooks";

const UsersBox = () => {
  const users = useUsersSelector();
  const callFetchUsers = useFetchUsers();

  const callSelectAuthor = useSelectAuthor();

  useEffect(() => {
    callFetchUsers();
  }, []);

  return (
    <>
      <div>
        <h2>Authors</h2>
        <select onChange={(e) => callSelectAuthor(e.target.value)}>
          <option value={-1}>Select Author...</option>
          {users &&
            users.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
};

export default UsersBox;