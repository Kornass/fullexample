import {useState} from 'react'
import axios from 'axios'

function AddCategory() {
const [category, setCategory] = useState('')
const [msg,setMsg] = useState('')

const handleSubmit = async (e) =>{
  e.preventDefault()
  try {
    let response = await axios.post("http://localhost:4050/category/add", {category:category} )
  setMsg(response.data)
setTimeout(()=>{
  setMsg('')
},3000)
setCategory('')
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className='col'>
      <form className='col' onSubmit={handleSubmit}>
        <input value={category} onChange={(e)=>setCategory(e.target.value)} />
        <button>Add category</button>
      </form>
      {msg && <h2>{msg}</h2>}
    </div>
  )
}

export default AddCategory