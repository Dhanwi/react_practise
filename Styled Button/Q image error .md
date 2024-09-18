### Styled Button
# https://www.reacterry.com/portal/challenges/styled-button

Create a component called App that renders a button with the text “Click me!”. The button should have the following styles:

A solid blue background color
A white text color
A font size of 16px
A padding of 10px 20px
A border-radius of 5px
A pointer cursor
A hover effect that changes the background color to light blue and the text color to black.

# output
![Image](https://github.com/user-attachments/assets/b3120fc2-6888-4547-9f16-964037ee780a)
![Image](https://github.com/user-attachments/assets/0e6107c4-12d7-4b80-ba58-02871c1a6a26)


Directions
You can use styled-components library to achieve the desired result
Your component should return just one button JSX element
The button should contain string “Click me!”

### errorr:
The issue you're experiencing with the button not being initially visible could be due to the `background-color` value. You’re using `solidblue`, which isn’t a valid CSS color. Instead, it should be either `blue`, `#0000FF`, or `rgb(0, 0, 255)`.

Here’s how you can fix it:

### Corrected Code:

```javascript
import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  background-color: blue;  /* Correct background color */
  font-size: 16px;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 8.2%;

  &:hover {
    color: black;
    background-color: lightblue;
  }
`;

const App = () => {
  return (
    <Button>Click me!</Button>
  );
};

export default App;
```

### Explanation:
1. **Background Color**: `solidblue` is not a valid color. I changed it to `blue` to make the button visible initially.
2. The rest of the styles are correct, and now the button should be visible when the page loads. When you hover over it, the color will change as expected.
