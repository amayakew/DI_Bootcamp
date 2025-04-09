import './App.css';
import PostsList from './features/posts/PostsList';
import UsersBox from './features/users/UsersBox';

function App() {

  return (
    <>
      <p>The Posts Project</p>
      <UsersBox/>
      <PostsList/>
    </>
  );
};

export default App;
