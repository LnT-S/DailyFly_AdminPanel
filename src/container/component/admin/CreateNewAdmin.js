import React, { useState } from 'react'
import '../../assets/css/login.css'
import { useContextData } from '../../screen/Screen'

export default function AddNewAdmin() {
  const { state, dispatch } = useContextData()

  const [level, setlevel] = useState(state?.level)
  const [LevelFilter, setLevelFilter] = useState()
  return (
    <div className="home">
      <div className="login-containers">
        <h1 className='login'>Create new Admin</h1>
        <form action="">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div className="form-group1">
              <label for="username" className="text1">Username:</label>
              <input type="email" id="email" className="log" name="email" placeholder='Enter You Email' />
            </div>
            <div className="form-group1" style={{width: 520}}>
              <label for="category" className="text1">Select Level:</label>
              <select id="category" name="Level" size="1" class="dropdown uppercase" style={{width: 520}} value={LevelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
                {level !== undefined && level.length > 0 && level.map((item, index) => {
                  return <option value={item} class="uppercase">{item} </option>
                })}
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div className="form-group1">
              <label for="password" className="text1">Password:</label>
              <input type="password" id="password" className="log" name="password" placeholder='Enter Your password' />
            </div>
            <div className="form-group1">
              <label for="password" className="text1">Re Enter Password:</label>
              <input type="password" id="password" className="log" name="confirm-password" placeholder='Re Enter Your password' />
            </div>
          </div>
          <button className="button" type="submit">Create New Admin</button>
        </form>
      </div>
    </div>
  )
}