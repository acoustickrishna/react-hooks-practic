import { useCallback, useEffect, useState } from "react";
import Todos from "./Todos";

const CallbackhookExample2 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  console.log("hii there");

  useEffect(() => {
    console.log("called useeffect before");
  });
  useEffect(() => {
    console.log("called useeffect");
  }, []);
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, `new Entry`]);
  // };

  return (
    <>
      {console.log("inside render")}
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default CallbackhookExample2;
