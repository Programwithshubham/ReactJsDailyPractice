// Events

import { useState } from "react"

const App = () => {
  // const [count,setcount]=useState();
  // const [name, setName] = useState("shubham");
  const [form, setForm] = useState({email:"",password:""});
  const handleclick=()=>{
    console.log("Clicked");
  }

  // const handlemouseover=()=>{
  //   alert("Over me");
  // }

  // const handlechange =(e)=>{
  //   setName(e.target.value);
  // }


  const handlechanges =(event)=>{
      setForm({...form,[event.target.name]:event.target.value})
      console.log(form);
  } 
  return (
    <>
    <div>
      <button onClick={handleclick}>Click</button>
    </div>

    <div>
      <h1>Hi I am Div</h1>
      {/* <p onMouseOver={handlemouseover}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum cupiditate officia nemo.</p> */}
    </div>


    <input type="text" name="email" value={form.email} onChange={handlechanges}/>
    
    <input type="text" name="password" value={form.password} onChange={handlechanges}/>
    <br />
        <button type="submit">Submit</button>
    </>
  )
}

export default App
