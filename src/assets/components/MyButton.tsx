function MyButton({count, onClick}:{count: number, onClick: any}): any {

  return (
    <button className="square" onClick={onClick}>Click me and this will change {count}</button>
  );
}

export default MyButton;
