import React, { useState } from 'react'

const App = () => {
  // Define and initialize state using the useState hook
  const [options, setOptions] = useState({
    length: 10,                // Length of the password, initially set to 10
    uppercase: false,          // Whether to include uppercase letters, initially set to false
    lowercase: false,          // Whether to include lowercase letters, initially set to false
    number: false,             // Whether to include numbers, initially set to false
    symbols: false,            // Whether to include symbols, initially set to false
    isError: false,            // Error state, initially set to false
  });

  // Initialize state variables for error handling and generated password
  const [isError, setIsError] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  // Function to generate a random password
  const generateRandomPassword = () => {
    // Check if none of the options for password generation are selected
    // Previous code lines...

    if (
      !options?.uppercase &&
      !options?.lowercase &&
      !options?.number &&
      !options?.symbols
    ) {
      setIsError(true);
      return;
    }


    setIsError(false);         // Reset isError state to false

    // Define character sets for each type of character to include in the password
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = '!@#$%^&*()_+-={}[]|:;"<>,.?/~';

    let passwordChars = "";    // Initialize a string to store all possible characters for the password
    let password = "";         // Initialize an empty string to store the generated password

    // Check each option and concatenate corresponding character set to passwordChars
    if (options.uppercase) {
      passwordChars += uppercaseChars;
    }
    if (options.lowercase) {
      passwordChars += lowercaseChars;
    }
    if (options.number) {
      passwordChars += numberChars;
    }
    if (options.symbols) {
      passwordChars += symbolChars;
    }

    const passwordLength = options.length;  // Get the desired length of the password

    // Generate the password by randomly selecting characters from passwordChars
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChars.length);  // Generate a random index within the range of passwordChars
      password += passwordChars[randomIndex];  // Append the randomly selected character to the password string
    }

    setGeneratedPassword(password);  // Set the generated password in the state variable
  }


  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p className="title">Generate Random Password</p>
        </div>


        <div className="card-body">
          <label>Password length</label>
          <input
            value={options.length}
            onChange={({ target }) => {
              setOptions({ ...options, length: target.value });
            }}
            name="confirmPassword"
            type="number"
            placeholder="Password length"
            min={4}
          />


          <div className="row">
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="languages"
                checked={options.uppercase}
                onChange={() => {
                  setOptions({ ...options, uppercase: !options.uppercase });
                }}
              />
              <label>Uppercase</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="languages"
                checked={options.lowercase}
                onChange={() => {
                  setOptions({ ...options, lowercase: !options.lowercase });
                }}
              />
              <label>Lowercase</label>
            </div>
          </div>


          <div className="row">
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="languages"
                checked={options.number}
                onChange={() => {
                  setOptions({ ...options, number: !options.number });
                }}
              />
              <label>Number</label>
            </div>


            <div className="checkbox-container">
              <input
                type="checkbox"
                name="languages"
                checked={options.symbols}
                onChange={() => {
                  setOptions({ ...options, symbols: !options.symbols });
                }}
              />
              <label>Symbols</label>
            </div>
          </div>


          {isError && (
            <span className="error">Please selete atleast one option</span>
          )}


          <button className="btn" onClick={generateRandomPassword}>
            Generate Password
          </button>
        </div>
      </div>


      {generatedPassword && (
        <div className="password">
          <label>Generated Password:</label>
          <p>{generatedPassword}</p>
        </div>
      )}
    </div>
  );
}
export default App