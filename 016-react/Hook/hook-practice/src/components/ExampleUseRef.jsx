import { useEffect, useState, useRef } from 'react';
export const ExampleUseRef = () => {
  const [num, setNum] = useState(0);

  const ref =  useRef();
  useEffect(() => {
    console.log('in useRef mount');
    ref.current = setInterval(() => {
      setNum(num => num + 1);
    }, 1000);
    return () => {
      console.log('in useRef unmount');
    };
  }, []);

  useEffect(() => {
    if (num > 10) {
      console.log('大于10了，清除定时器');
      console.log('timer：', ref.current);
      //  因为每一个timer都是独立render的，所以获取不到
      clearTimeout(ref.current);
    }
  }, [num]);

  return (
      <div>
        <h3>ExampleUseRef</h3>
        <br></br>
          这是ref.current的值——ref.current:{ ref.current }<br></br>
          这是一个函数式组件————num:{  num }
      </div>
  );
};
