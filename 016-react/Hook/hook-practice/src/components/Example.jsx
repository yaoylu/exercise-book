import React, { useState, useEffect, useMemo, memo } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`${count}`);
    }, 3000);
  });

  return (
    <div>
      <p>你点击了{count}次</p>
      <button onClick={() => setCount(count + 1)}>
        点击我
      </button>
    </div>
  );
}

const Child = memo(() => {
  console.log('我是子组件');
  return <p>我是子组件</p>;
});

function Parent() {
  const [show, setShow] = useState(true);

  const info = useMemo(() => ({
    name: 'Even',
    age: 22,
  }), []);
  return (
      <div>
          <Child info={ info } />
          <button onClick={ () => setShow(!show) }>点击更新状态</button>
      </div>
  );
}
export {
  Example,
  Counter,
  Parent,
};
