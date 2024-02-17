
import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([
    {
      title: "Todo 1",
      desc: "i am Shubham",
    },
    {
      title: "Todo 2",
      desc: "i am lokesh",
    },
    {
      title: "Todo 3",
      desc: "i am elvish",
    },
    {
      title: "Todo 4",
      desc: "i am abhishek",
    },
  ]);

  return (
    <div>
      {todo.map((item) => (
        <div key={item.title}>
          <div>{item.title}</div>
          <div>{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
