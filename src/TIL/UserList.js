import React from 'react';
import { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(()=>{
    console.log("user 값 설정.");   
    console.log(user);
    return()=>{
        console.log("user 값 변경 전");
        console.log(user);
    }
  })
  return (
    <div>
      <b style={{cursor:'pointer', color: user.active ? 'green' : 'black'}} onClick={()=>onToggle(user.id)} >{user.username}</b> &nbsp; <span>({user.email})</span>
      <button onClick={()=>onRemove(user.id)}>Delete</button>
    </div>
  );
}

function UserList({users, onRemove, onToggle}) {
  return (
    <div>
        {users.map(user =>(
            <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
        ))}
    </div>
  );
}

export default UserList;