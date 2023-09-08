import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'


function App() {
  
  function HandleClick(){
    alert('button click')
  }
  const HandleClick2 =() =>{
    alert('button 2 clicked')
  }
  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      
      <h3>Vite Core concepts</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onclick='HandleClick()'>Click Me</button> */}
      <button onClick={HandleClick}>Click Me</button>
      <button onClick={HandleClick2}>Click2</button>
      <button onClick={() =>{alert('third clicked')}}>third</button>
      <button onClick={() => addToFive(3)}>Four</button>
      
      
    </>
  )
}

export default App
