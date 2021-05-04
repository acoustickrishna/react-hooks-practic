import logo from './logo.svg';
import './App.css';
import UseStateHooks from './Components/useStateHooks';
import React from 'react';
import UseStateWithPrevStateHooks from './Components/UseStateWithPrevStateHooks';
import UseStateWithObject from './Components/UseStateWithObject';
import UseStateWithArray from './Components/UseStateWithArray';
import UseEffectHooks from './Components/UseEffectHooks';
import UseEffectConditionalHook from './Components/UseEffectConditionalHook';

function App() {
  return (
    <React.Fragment>
      {/* Use State Example */}
          {/* <UseStateHooks/> */}
      {/* Use State With Prev State Example  */}
          {/* <UseStateWithPrevStateHooks /> */}
      {/* Use State With Object */}
          {/* <UseStateWithObject/> */}
      {/* Use State With Array */}
          {/* <UseStateWithArray/> */}
      {/* Change title by Use Effect  */}
          {/* <UseEffectHooks/> */}
      {/* Conditional render by passing variable inside useeffect dependency array     */}
          <UseEffectConditionalHook/>
    </React.Fragment>
  );
}

export default App;
