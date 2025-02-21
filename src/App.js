import { useState, useEffect } from 'react';
import './App.css';
import Box from './component/Box'

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);

  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2+1);
  }

  //1. 버튼 클릭
  //2. counter+1fotj 1dl ehla
  //3. setState 함수 호출
  //4. 변수값은 1로 보이고 state 값은 안 변했기 때문에 그 전 값이 보임
  //5. 리랜더링(counter는 0으로 초기화됨)
  
  //useEffect 매개변수 두 가지: 콜백함수 ()=>{}, array[]
  //useEffect = componentDidMount     랜더링 시 실행됨
  useEffect(()=>{
    console.log("useEffect1");
  },[]);

  //useEffect = componentDidUpdate      counter2가 update 될 때마다 호출됨
  useEffect(()=>{
    console.log("useEffect2");
  },[counter2]);
 
  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
