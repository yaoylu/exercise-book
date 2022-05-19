import { useState, useContext, createContext } from 'react';
const Context = createContext(null);
export function ExampleUseContext() {
  const [num, setNum] = useState(1);

  return (
      <div>
          <h3>ExampleUseContext</h3>
          <button onClick={ () => setNum(num => num + 1) }>增加num的值+1</button>
          <br></br>
          这是一个函数式组件——num:{  num }
            <Item1 num={num}></Item1>
            <Item2 num={num}></Item2>
          <Context.Provider value={num}>
            <Item3></Item3>
            <Item4></Item4>
          </Context.Provider>
      </div>
  );
}
function Item1(props) {
  return (
      <div>
          子组件1 num：{ props.num }
      </div>
  );
}

function Item2(props) {
  return (
      <div>
          子组件2 num：{ props.num }
      </div>
  );
}


function Item3() {
  return (
      <div>
          <Item5 />
      </div>
  );
}

function Item4() {
  const num = useContext(Context);
  return (
      <div>
          子组件4 num：{ num }
      </div>
  );
}
function Item5() {
  const num = useContext(Context);
  return (
      <div>
          子组件5 num：{ num }
      </div>
  );
}

