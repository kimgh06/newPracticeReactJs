import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

async function getUser(id){
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function User({id}){
  const [state] = useAsync(()=>getUser(id),[id]);
  const {loading, data:user, error}=state;

  if(loading) return <div>Loading...</div>;
  if(error) return <div>Errors Found</div>;
  if(!user) return null;

  return(
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email : </b>{user.email}
      </p>
    </div>
  );
}

export default User;