import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ userList, onLogin }) {
  const [userValue, setUserValue] = useState(0);

  const navigate = useNavigate();

  const onLoginButtonClick = () => {
    onLogin(parseInt(userValue))
    navigate("/")
  }

  return (
    <div className="row">
      <div className="col">
        <h2>Fake Login Form</h2>
        <select 
          className="form-select mt-3"
          value={userValue} 
          onChange={(event) => setUserValue(event.target.value)}
        >
          { userList.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
        <button className="btn btn-primary mt-3" onClick={onLoginButtonClick}>Login</button>
      </div>
    </div>
  )
}
