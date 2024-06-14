import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'

const App = () => {
  const [options, setOptions] = useState({
    legnth: 10,
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
    isError: false,
  });
  const [isError, setIsError] = useState(false)
  const [generatedPassword, setGeneratedPassword] = useState("");
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <p className='title'>Generate Random Password</p>
        </div>
        <input value={options.lenght}
          onChange={(({ target }) => {
            setOptions({ ...options, legnth: target.value });
          })
          } name="confirmPassword"
          type="number"
          placeholder='password lenght'
          min={4} />
          <div className="row">
          <div className="checkbox-container">
          <input type="checkbox"
          name='languages' 
          checked={options.lowercase}
          onChange={()=>{
          setOptions({...options, uppercase: !options.uppercase});
          }}/>
          <label>Uppercase</label>
          </div>
          </div>

      </div>

    </div>
  )
}

export default App