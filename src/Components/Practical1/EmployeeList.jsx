import React from "react";

export default function EmployeeList({ empList }) {
  const showEmpList = () => {
    console.log();
    return empList.map((s, i) => {
      return (
        <tr>
          <th>{s.EmpId}</th>
          <th>{s.EmpName}</th>
          <th>{s.EmpEmail}</th>
        </tr>
      );
    });
  };
  return (
    <div>
      <table border={1}>
        <tr>
          <th>EmpId</th>
          <th>EmpName</th>
          <th>EmpEmail</th>
        </tr>
        {showEmpList()}
      </table>
    </div>
  );
}
