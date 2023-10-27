import React, { useState } from 'react'

export default function Form() {
    
    const[formData,setFormData]=useState({firstName:'',lastName:'',email:''})
    
    console.log(formData)
    
    function handleChange(event){
        // console.log('changed')
        setFormData(preFormData=>{
            return{
                ...preFormData,
                [event.target.name]:event.target.value
            }
        })
    }
    
    
  return (
    <div className='col-8 offset-2'>
    <h3>Form Data</h3>
        <form>
            <input className='form-control mt-2' type="text" placeholder='First Name' name='firstName' onChange={handleChange}/>
            
            <input className='form-control' type="text" placeholder='Last Name' name="lastName" onChange={handleChange}/>
            
            <input className='form-control type="email' placeholder='Email' name='email' onChange={handleChange} />
        </form>
    
    </div>
  )
}
