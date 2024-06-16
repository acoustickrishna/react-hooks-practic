// Updated Input Component without the Hover Logic
const InputComponent = ({ type, isHovered }) => {
  return <input type={type} style={{ backgroundColor: isHovered ? "blue" : "white" }} />;
};
export default InputComponent;
