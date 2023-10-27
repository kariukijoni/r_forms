import React, { useState } from 'react'

export default function Form() {
    
    const[formData,setFormData]=useState({firstName:'',lastName:'',email:'',comments:'',
                                          isFriendly:true,employment:'',favColor:''})
    
    // console.log(formData)
    
    function handleChange(event){
        // console.log('changed')
        
        const{name,value,type,checked}=event.target
        
        setFormData(preFormData=>{
            return{
                ...preFormData,
                [name]: type === "checkbox" ? checked:value
            }
        })
    }
    
    function handleSubmit(event){
        event.preventDefault()
        
        console.log(formData)
    }
    
    
  return (
    <div className='col-8 offset-2'>
    <h3>Form Data</h3>
        <form onSubmit={handleSubmit}>
            <input className='form-control mt-2' type="text" placeholder='First Name' name='firstName' 
            value={formData.firstName} onChange={handleChange}/>
            
            <input className='form-control' type="text" placeholder='Last Name' name="lastName" 
            value={formData.lastName} onChange={handleChange}/>
            
            <input className='form-control type="email' placeholder='Email' name='email' 
            value={formData.email} onChange={handleChange} />
            
            <textarea className='form-control' value={formData.comments} placeholder='Comments' 
            onChange={handleChange} name='comments'/>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="isFriendly" name='isFriendly' checked={formData.isFriendly} 
                onChange={handleChange}/>
                <label className="form-check-label" htmlFor="isFriendly">Are you friendly?</label>
            </div>
            
            <fieldset>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="employment" id="unemployed" value="unemployed" 
                checked={formData.employment === 'unemployed'} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="unemployed">
                    Un-employed
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="employment" id="partTime" value="partTime" 
                checked={formData.employment === 'partTime'} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="partTime">
                    Part-time
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="employment" id="fullTime" value="fullTime" 
                checked={formData.employment === 'fullTime'} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="fullTime">
                    Full-time
                </label>
                </div>          
            
            </fieldset>
             <br />
            <label htmlFor='favColor'>What is your favourite color?</label>
            <select className="form-select" id='favColor'
            name='favColor' onChange={handleChange} value={formData.favColor}>
                <option value='red'>Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            
            <button>Submit</button>
        </form>
    
    </div>
  )
}
