/* eslint-disable */
import "./App.css";
import React, {useRef} from 'react';
// import { render } from "react-dom"; 
// import InputSample from './TIL/InputSample';
import UserList from "./TIL/UserList";
import CreateUser from "./TIL/CreateUser";
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email} = inputs;
  const onChange = e =>{
    const { name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }
  const [users,setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);
  const nextId = useRef(4);
  const onCreate = () =>{
    const user = {
      id:nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    setInputs({
      username:'',
      email:''
    })
    nextId.current += 1;
  }

  const onRemove = id =>{
    setUsers(users.filter(user => user.id !== id));
  }
  return (
  <>
    <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} />
  </>
  );
}
    
export default App;