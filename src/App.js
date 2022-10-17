/* eslint-disable */
import "./App.css";
import React, {useRef , useState, useMemo, useCallback} from 'react';
// import { render } from "react-dom"; 
// import InputSample from './TIL/InputSample';
import UserList from "./TIL/UserList";
import CreateUser from "./TIL/CreateUser";
import Counter from "./TIL/Counter";

function countActiveUsers(users){
  console.log("counting");
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email} = inputs;
  const onChange = useCallback(e =>{
    const { name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  },
  []
  );
  const [users,setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);
  const nextId = useRef(4);
  const onCreate = useCallback(() =>{
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
  }, [username, email]);

  const onRemove = id =>{
    setUsers(users.filter(user => user.id !== id));
  }
  const onToggle = useCallback(id =>{
    setUsers(
      users.map(user =>
        user.id === id? {...user, active:!user.active}:user
        )
    );
  },
  [users]
  );
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
  <>
    <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    <div>활동중인 사용자수 : {count}</div>
  </>
  );
}
    
export default App;