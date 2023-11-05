import React,  { useState } from 'react'

function Home() {

    const [iceCream, setIceCream] = useState('chocolate');
  return (
    <div>
        <h1>Form Handling</h1>
      <form>
        <select value={iceCream}
        onChange={(e)=>{
          setIceCream(e.target.value)  
        }}>
            <option value="Dairy milk">Dairy Milk</option>
            <option value="chocolate">Chocolate</option>
            <option value="strawberry">Strawberry</option>
            <option value="vanilla">Vanilla</option>
        </select>
        <h1>Selected IceCream : {iceCream}</h1>
      </form>
    </div>
  )
}

export default Home;