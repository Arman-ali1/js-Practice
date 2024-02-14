import React ,{useState} from 'react'
import './Home.css'
import axios from 'axios'

function Home() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [data, setData] = useState('')
    const handleSubmitStudent = async(e) => {
        e.preventDefault()
        console.log(email, pass, data);
        await axios.post(
        'http://localhost:8000/api/v1/notes/createStudent',
        {email, pass, data}
        )
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          
        })
    }

    const handleSubmitEmployee = async(e) => {
        e.preventDefault()
        console.log(email, pass)
        await axios.post(
            "http://localhost:8000/api/v1/notes/createEmployee",  
            { email,pass}, 
        ).then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e)
        })
    };
    
    const handleSubmitAdministration = (e) => {
        e.preventDefault()
        console.log(email, pass, data)
    }
    const handleSubmitStudentUpdate = async(e) => {
        e.preventDefault()
        console.log(email)
        await axios.post(
            `http://localhost:8000/api/v1/notes/studentUpdate`,
            {email, data}   
        ).then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e)
        })

    }
    const handleSubmitEmployeeUpdate = async(e) => {
        e.preventDefault()
        console.log(email)
        await axios.post(
            "http://localhost:8000/api/v1/employees/updateEmployee",
            {email, data} 
        ).then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e)
        })
    }
    const handleSubmitAdministrationUpdate = async(e) => {
        e.preventDefault()
        console.log(email)
        await axios.post(
            "http://localhost:8000/api/v1/administrations/updateAdministration",
            {email, data} 
        ).then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e)
        })
    }
    const handleSubmitStudentGet = async(e) => {
        e.preventDefault()
        console.log(email)
        await axios.post(
            `http://localhost:8000/api/v1/notes/getStudents`,{email}
        ).then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e)
        })
    }
    const handleSubmitEmployeeGet = async(e) => {
        e.preventDefault()
        console.log(email)
        await axios.post(
            `http://localhost:8000/api/v1/employees/getEmployees`,{email}
        ).then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e)
        })
    }
    const handleSubmitAdministrationGet = async(e) => {
        e.preventDefault()
        console.log(email)
        await axios.post(
            `http://localhost:8000/api/v1/administrations/getAdministrations}`,{email}
        ).then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e)
        })
    }


  return (
    <div className='main-container'>
      khan saab
      <div className='container'>
        <form>
            <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input onChange={(e)=>setEmail(e.target.value)} type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
                <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
            </div>
            <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input onChange={(e)=>setPass(e.target.value)} type='text' className='form-control'/>
            </div>
            <button onClick={handleSubmitStudent} type='submit' className='btn btn-primary'>Student</button>
            <button onClick={handleSubmitEmployee} type='submit' className='btn btn-primary'>Employee</button>
            <button onClick={handleSubmitAdministration} type='submit' className='btn btn-primary'>Administrator</button>
            <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input onChange={(e)=>setEmail(e.target.value)} type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
            </div>
            <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>data</label>
                <input onChange={(e)=>setData(e.target.value)} type='number' className='form-control' id='exampleInputData' />
            </div>
            <button onClick={handleSubmitStudentUpdate} type='submit' className='btn btn-primary'>S-Update</button>
            <button onClick={handleSubmitEmployeeUpdate} type='submit' className='btn btn-primary'>E-Update</button>
            <button onClick={handleSubmitAdministrationUpdate} type='submit' className='btn btn-primary'>A-Update</button>
            <h1>get data</h1>
            <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input onChange={(e)=>setEmail(e.target.value)} type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
                <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
            </div>
            <button onClick={handleSubmitStudentGet} type='submit' className='btn btn-primary'>S-Get</button>
            <button onClick={handleSubmitEmployeeGet} type='submit' className='btn btn-primary'>E-Get</button>
            <button onClick={handleSubmitAdministrationGet} type='submit' className='btn btn-primary'>A-Get</button>
        </form>
      </div>
    </div>
  )
}

export default Home
