import React from "react";
import WithToggleHOC from "./withToggleHoc";

const ViewEditToggleExample = ({ toggle, toggleStatus, title }) => (
  <div>
    {toggleStatus ? <input type="text" value={title} /> : <p>{title}</p>}
    <button onClick={toggle}>{toggleStatus ? "Cancel" : "Edit"}</button>
  </div>
);

export default WithToggleHOC(ViewEditToggleExample);
