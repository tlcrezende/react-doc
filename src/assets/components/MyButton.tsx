import { useState } from "react";

function MyButton(): any {
  const [count, setCount] = useState(0);
  const handleClick = (): any => {
    setCount(count + 1);
  };
  return (
    <button onClick={handleClick}>Click me and this will change {count}</button>
  );
}

export default MyButton;
