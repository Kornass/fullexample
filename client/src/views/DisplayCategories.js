import {useEffect, useState} from 'react'
import axios from 'axios'

function DisplayCategories() {
const [categories,setCategories] = useState(null)


const fetchCategories = async () =>{
    try {
        let response = await axios.get('http://localhost:4050/category/categories')
        console.log(response);
        if(response.status === 200) {
            setCategories(response.data)
        }
    } catch (error) {
        console.log(error);
    }
}


useEffect(()=>{
fetchCategories()
},[])


  return (
    <div className='col'>
        <h2>All categories</h2>
         {categories && categories?.map((category, idx)=>(
           <div key={idx} >
            <h3>{category.category}</h3>
           </div> 
         ))}
    </div>
  )
}

export default DisplayCategories