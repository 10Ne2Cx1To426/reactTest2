import React, { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickChange = () => {
    setfaceShowFlag(!faceShowFlag);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickChange}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ＾∀＾)</p>}
    </>
  );
};

export default App;
