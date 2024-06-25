  "use client"
import Image from "next/image";
  import { useState,ues } from "react";

  export default function Home() {
    const [count, setcount] = useState(0)
    
    return (
      <>
      
      hello from page.js
      <br />
     <button onClick={()=>setcount(count + 1)} className=" bg-green-600 p-2 rounded border-cyan-400 "> increment</button>
     <p>here is the count {count}</p>
      </>
    );
  }
