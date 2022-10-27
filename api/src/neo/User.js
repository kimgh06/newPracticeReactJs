import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

async function getUsers(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
}


function User(){
  const [state, refetch] = useAsync(getUsers,[], true);

  const {loading, data: users, error} = state;

  if(loading) return <div>loading...</div>;
  if(error) return <div>Errors Found</div>;
  if(!users) return <button onClick={refetch}>Try</button>;
  
  return (
  <>
    <ul>
      {users.map(user =>(
          <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
    <button onClick={refetch}>Retry</button>
  </>
  );
}

export default User;