// Updated Text Component without the Hover Logic
const TextComponent = ({ text, isHovered }) => {
  return (
    <>
      <p style={{ backgroundColor: isHovered ? "blue" : "white" }}>{text}</p>
    </>
  );
};

export default TextComponent;
