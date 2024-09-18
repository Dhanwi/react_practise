# Select all checkboxes
# https://www.reacterry.com/portal/challenges/select-all-checkboxes
In this coding challenge your task is to finish the CheckboxList component. We have already styled it for you. Your task is to implement the functionality to both:

Select the individual checkboxes.
Select all checkboxes when the Select All button is clicked.

# output
![Image](https://github.com/user-attachments/assets/2173ee96-91bb-42bb-a5c7-237acfcfa877)


Directions
You don’t need to worry about styling your application as we have already done it for you. But if you wish to update the styles, you can use styled-components, inline style or tailwindcss.
Do not edit the data-testid attributes.

### Error resolved: 
The error "Too many re-renders. React limits the number of renders to prevent an infinite loop" occurs because of how you're passing the `handleCheckBox` function to the `onChange` event handler in your checkbox input.

### The Problem:
```jsx
onChange={ handleCheckBox(checkbox.id) }
```

In this code, you're **immediately invoking** the `handleCheckBox` function during every render of the component because you're calling it directly (with `checkbox.id`). This leads to the function being executed continuously, causing an infinite loop and re-rendering the component excessively.

### Solution:
You need to pass a **function reference** to `onChange`, not execute the function right away. You can fix it by using an **arrow function**:

### Correct Code:
```jsx
onChange={() => handleCheckBox(checkbox.id)}
```

### Why This Works:
- By using an arrow function, you're delaying the execution of `handleCheckBox(checkbox.id)` until the `onChange` event actually happens (when the checkbox is clicked). This prevents the infinite loop.

### Summary:
- **Wrong:** `onChange={ handleCheckBox(checkbox.id) }` (executes immediately, causing the loop).
- **Correct:** `onChange={() => handleCheckBox(checkbox.id)}` (executes only when the checkbox is clicked).
