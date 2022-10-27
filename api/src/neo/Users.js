import React,{useState} from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import User from './User';

async function getUsers(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
}


function Users(){
  const [userId, setUserId] = useState(null);
  const [state, refetch] = useAsync(getUsers,[], true);

  const {loading, data: users, error} = state;

  if(loading) return <div>loading...</div>;
  if(error) return <div>Errors Found</div>;
  if(!users) return <button onClick={refetch}>Try</button>;
  
  return (
  <>
    <ul>
      {users.map(user =>(
          <li key={user.id} onClick={()=>setUserId(user.id)} 
            style={{cursor:'pointer'}}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
    <button onClick={refetch}>Retry</button>
    {userId && <User id={userId}/>}
  </>
  );
}

export default Users;