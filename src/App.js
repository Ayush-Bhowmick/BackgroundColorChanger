import { useState } from "react";

function App() {
const[color, setcolor] = useState("grey");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-12 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-white gap-3 px-20 py-3 rounded-3xl">
          <button
          onClick={()=> setcolor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"red"}}>Red</button>
          <button
          onClick={()=> setcolor("Purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Purple"}}>Purple</button>
          <button
          onClick={()=> setcolor("Pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Pink"}}>Pink</button>
          <button
          onClick={()=> setcolor("Blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Blue"}}>Blue</button>
          <button 
          onClick={()=> setcolor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-white text-bold shadow-xl" style={{backgroundColor:"Gold"}}>Yellow</button>
          <button
          onClick={()=> setcolor("Green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Green"}}>Green</button>
          <button
          onClick={()=> setcolor("Orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Orange"}}>orange</button>
          <button 
          onClick={()=> setcolor("Lavender")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Lavender"}}>Lavender</button>
        </div>
      
      </div>
    </div>
  );
}

export default App;
