
// Local Storage 
// Write a simple App component that returns an input field of type text. 
  // Users can interact with the input field to type in any string they want.
  //   You’re meant to store this string in local storage so that every time 
  //   when the page reloads it pre-fills the input field with the latest known value for the users.

// We have already written some starting code for you.
import React, {useState, useEffect} from 'react';

const App = () => {
  // Edit this component
  const [textField, setTextFeild] = useState(
    localStorage.getItem('inputValue')?localStorage.getItem('inputValue') : ""
  );

  useEffect(() => {
    localStorage.setItem('inputValue', textField)
  }, [textField]);

  return (
    <div>
      <input data-testid='input-id' type="text" value={textField} onChange={(e) => setTextFeild(e.target.value)} />
      
    </div>
  );
};

export default App;
