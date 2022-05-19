import { useState, useCallback } from 'react';
const set = new Set();
export default function StateFunction() {
  const [num, setNum] = useState(1);
  const [age] = useState(18);

  // const getDoubleNum = useMemo( () => {
  //     console.log(`获取双倍Num${num}`)
  //     return 2 * num  //	①假设为复杂计算逻辑
  // },[] )

  const getDoubleNum = useCallback(() => {
    console.log(`获取双倍Num${num}`);
    return 2 * num;  //	②假设为复杂计算逻辑
  }, [num]);

  set.add(getDoubleNum());  //	③注意set打印的长度变化（设置Callback的依赖为[]、[num]进行对比）
  console.log('set.size：', set.size);

  return (
        <div onClick={ () => {
          setNum(num => num + 1);
        }  }>
          <h3>ExampleStateFunction compare UseCallBack and UseMemo</h3>
            <br></br>
            {/* 这是一个函数式组件————num：{  getDoubleNum /*①useMemo情况下*/ }
            这是一个函数式组件————num：{  getDoubleNum() /** ②useCallback情况下*/}
            <br></br>
            age的值为————{ age }
            <br></br>
        </div>
  );
}
