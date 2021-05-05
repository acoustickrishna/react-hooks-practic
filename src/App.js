import logo from './logo.svg';
import './App.css';
import React from 'react';
import UseStateHooks from './Components/useState/useStateHooks';
import UseStateWithPrevStateHooks from './Components/useState/UseStateWithPrevStateHooks';
import UseStateWithObject from './Components/useState/UseStateWithObject';
import UseStateWithArray from './Components/useState/UseStateWithArray';
import UseEffectHooks from './Components/useEffect/UseEffectHooks';
import UseEffectConditionalHook from './Components/useEffect/UseEffectConditionalHook';
import UseEffectOnlyOnce from './Components/useEffect/UseEffectOnlyOnce';
import UseEffectWithCleanUp from './Components/useEffect/UseEffectWithCleanUp';
import UseEffectDataFetching from './Components/useEffect/UseEffectDataFetching';
import UseContextHooksPartOne from './Components/useContext/UseContextHooksPartOne';
import ParentComponent from './Components/useCallback/ParentComponent';
import UseMemo from './Components/useMemo/UseMemo';
import UseRef from './Components/useRef/UseRef';
import UseRefWithIntervel from './Components/useRef/UseRef';
import UseReducerExample from './Components/useReducer/UseReducerExample';


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
            {/* <UseEffectConditionalHook/> */}
            {/* UseEffect Called Only Once */}
            {/* <UseEffectOnlyOnce /> */}
            {/* Clean Up in Dom Using Hooks */}
            {/* <UseEffectWithCleanUp /> */}
            {/* Fetching get api data */}
            {/* <UseEffectDataFetching /> */}
            {/* Use Context using old method and using useContext hooks bothy example are inside */}
            {/* <UseContextHooksPartOne /> */}
            {/* Use Of UseCallback hooks */}
            {/* <ParentComponent /> */}
            {/* Use Memo Example  */}
            {/* <UseMemo/> */}
            {/* Use Ref Example  */}
            {/* <UseRef /> */}
            {/* Useref with timer set intervel */}
            {/* <UseRefWithIntervel /> */}
            {/* Example of reducer */}
            <UseReducerExample/>

        </React.Fragment>
    );
}

export default App;
