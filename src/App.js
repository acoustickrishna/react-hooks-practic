import logo from "./logo.svg";
import "./App.css";
import React from "react";
import UseStateHooks from "./Components/useState/useStateHooks";
import UseStateWithPrevStateHooks from "./Components/useState/UseStateWithPrevStateHooks";
import UseStateWithObject from "./Components/useState/UseStateWithObject";
import UseStateWithArray from "./Components/useState/UseStateWithArray";
import UseEffectHooks from "./Components/useEffect/UseEffectHooks";
import UseEffectConditionalHook from "./Components/useEffect/UseEffectConditionalHook";
import UseEffectOnlyOnce from "./Components/useEffect/UseEffectOnlyOnce";
import UseEffectWithCleanUp from "./Components/useEffect/UseEffectWithCleanUp";
import UseEffectDataFetching from "./Components/useEffect/UseEffectDataFetching";
import UseContextHooksPartOne from "./Components/useContext/UseContextHooksPartOne";
import ParentComponent from "./Components/useCallback/ParentComponent";
import UseMemo from "./Components/useMemo/UseMemo";
import UseRef from "./Components/useRef/UseRef";
import UseRefWithIntervel from "./Components/useRef/UseRef";
import UseReducerExample from "./Components/useReducer/UseReducerExample";
import WithHover from "./Components/HOC";
import InputComponent from "./Components/HOC/HocInputComponent";
import TextComponent from "./Components/HOC/HocTextComponent";
import ErrorBoundary from "./Components/ErrorBoundry/index";
// import MyComponent from "./Components/ErrorBoundry/CustomError";
import CallbackhookExample2 from "./Components/useCallback/useCallbackExample2";
import CollapseExpandExample from "./Components/HOC/hocExample2/CollapseExpandExample";
import ViewEditToggle from "./Components/HOC/hocExample2/viewEditToggle";
import ColorBoxInteraction from "./Components/Practical1/ColorBoxInteraction";
import EmployeeList from "./Components/Practical1/EmployeeList";

function App() {
  const TextComponentWithHover = WithHover(TextComponent);
  const InputComponentWithHover = WithHover(InputComponent);
  const list = [
    { id: 1, name: "Eggs" },
    { id: 2, name: "Bread" },
  ];

  const empList = [
    {
      EmpId: "1",
      EmpName: "Krishna",
      EmpEmail: "Krishna@gmail.com",
    },
    {
      EmpId: "2",
      EmpName: "Krishna2",
      EmpEmail: "Krishna2@gmail.com",
    },
    {
      EmpId: "3",
      EmpName: "Abhi",
      EmpEmail: "abhi@gmail.com",
    },
  ];

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
      {/* <CallbackhookExample2 /> */}
      {/* Use Memo Example  */}
      {/* <UseMemo/> */}
      {/* Use Ref Example  */}
      {/* <UseRef /> */}
      {/* Useref with timer set intervel */}
      {/* <UseRefWithIntervel /> */}
      {/* Example of reducer */}
      {/* <UseReducerExample/> */}
      {/* Example of HOC */}
      {/* <TextComponentWithHover text="hello there" />
      <InputComponentWithHover /> */}
      {/* <CollapseExpandExample list={list} />
      <ViewEditToggle title="My first post" /> */}
      {/* Example of Error Boundary */}
      {/* <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary> */}
      {/* <ColorBoxInteraction /> */}

      <EmployeeList empList={empList} />
    </React.Fragment>
  );
}

export default App;
