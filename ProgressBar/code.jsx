// link: https://www.reacterry.com/portal/challenges/progress-bar

// Progress Bar
// Create a component called ProgressBar displays a progress bar. The progress bar should have the following styling applied:

// A width of 100%
// A height of 20px
// A border radius of 5px
// The completed bit should be green
// The remaining bit should be lightgrey
// The component should accept a percent prop which is used to determine how many percents of the progress bar to fill with green colour.

// We have already written some code for you.

// Hide Demo
// x
// Directions
// Do not edit the data-testid attributes
// You can use styled-components library to achieve the desired result


import styled from 'styled-components'

const Pwrapper = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  background-color: lightgrey;
  overlay: hidden;
  `;
  
  



const Progress = styled.div`
  height: 100%;
  width: ${({percent}) => Math.min(percent, 100) }%;
  background-color: green;
  border-radius: 5px;

`;
  


const ProgressBar = ({ percent = 12 }) => {

  return (
    <Pwrapper data-testid="wrapper"  >
      <Progress data-testid="progress" percent ={percent} />
    </Pwrapper>
  );
};

export default ProgressBar;
