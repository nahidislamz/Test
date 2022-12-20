import './App.css';
import { useState } from 'react';
import CustomButton from './components/CustomButton';
function App() {
  const [count,setCount] = useState(0)
  function clickHandler (text){
    setCount(count+1)
    setTheme(text)
    console.log(text)
  }

  const [theme,setTheme]=useState('light-theme')
  
  return (
    <div className={`App ${theme ? theme: "light-theme"}`}>
      <h2>What is Lorem?</h2>
      <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </h6>
      <p>You clicked {count} times</p>
      <CustomButton  id={"btnInsert"}
        btn={'btn-dark'}
        type={"Submit"}
        value={"Dark Mode"}
        clickHandler={()=>{clickHandler('dark-theme')}}
        />
      <CustomButton  id={"btnInsert"}
        btn={'btn-light'}
        type={"Submit"}
        value={"Light Mode"}
        clickHandler={()=>{clickHandler('light-theme')}}
        />
      <CustomButton  id={"btnInsert"}
        btn={'btn-rainbow'}
        type={"button"}
        value={"Disabled Button"}
        isDisabled={true}
        clickHandler={()=>{clickHandler('light-theme')}}
        />

    </div>
  );
}

export default App;
