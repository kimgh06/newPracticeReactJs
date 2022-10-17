import React from 'react';

function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={()=>onRemove(user.id)}>Delete</button>
    </div>
  );
}

function UserList({users, onRemove}) {
  return (
    <div>
        {users.map(user =>(
            <User user={user} key={user.id} onRemove={onRemove} />
        ))}
    </div>
  );
}

export default UserList;