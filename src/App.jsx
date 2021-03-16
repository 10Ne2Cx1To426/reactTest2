import React from "react";

export const App = () => {
  const onclickAdd = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onclickAdd}>ボタン</button>
    </>
  );
};

export default App;
