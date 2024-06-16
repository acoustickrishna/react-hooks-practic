import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";
// if i not use memo and useCallback then all the child component will render even we click on the one of then

function ParentComponent() {
  const [age, setage] = useState(25);
  const [salary, setsalary] = useState(50000);

  const incAge = useCallback(() => {
    setage(age + 1);
  }, []);

  const incSalary = useCallback(() => {
    setsalary(salary + 1);
  }, []);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handelClick={incAge}>Inc Age</Button>
      <Count text="Salary" count={salary} />
      <Button handelClick={incSalary}>Inc Salary</Button>
    </div>
  );
}

export default ParentComponent;
