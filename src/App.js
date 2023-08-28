import { useState } from "react";
import "./App.css";
import { useMemo } from "react";
import { useEffect } from "react";

const Privet = ({ changeValue }) => {
  console.log("privetRender");
  return <button onClick={changeValue}>privet</button>;
};

function App() {
  const [value, setValue] = useState([0, 0, 0, 0]);
  const [isOpen, setIsOpen] = useState(false);

  const changeValue = (index) => {
    setValue(value.with(1, value[1] + 1));
  };

  //useState
  //change props
  //useEffect
  //useContext

  let memoArray = useMemo(() => {
    return value.map((value, index) => {
      return (
        <button onClick={() => changeValue(index)} key={index}>
          {`value${index}`} : {value}
        </button>
      );
    });
  }, [value]);

  return (
    <div className="App">
      {memoArray}
      <Privet changeValue={changeValue} />
      <button onClick={() => setIsOpen((value) => !value)}>privet</button>
    </div>
  );
}

export default App;
