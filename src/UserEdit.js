import { useEffect, useState } from "react"


export default function UserEdit(props){

    let [useredit,setuseredit]= useState([]);
    useEffect(async()=>{
        let user = await fetch(`https://6073d49a066e7e0017e785fb.mockapi.io/data/${props.match.params.id}`)
        let userdata = await user.json();
        console.log(userdata)
     
        setuseredit([userdata])
    },[])
    return <>
   

    <div class = 'container'>
    <form>
        <div className='row'>
            <div className ='col-lg-12 p-0'>
                <h3>User Updation Form</h3>
            </div>
        </div>
        <div className='row'>
        <div className = 'col-lg-6 p-0 mt-3'>
                    <label >First Name</label>
                    <input className='form-control' value ={useredit}></input>
                </div>
                <div className = 'col-lg-6 mt-3'>
                    <label >Last Name</label>
                    <input className='form-control'></input>
                </div>
                <div className = 'col-lg-6 p-0 mt-3'>
                    <label >Email</label>
                    <input className='form-control'></input>
                </div>
                <div className = 'col-lg-6 mt-3'>
                    <label >Password</label>
                    <input className='form-control'></input>
                </div>
                <div className = 'row'>
                <div className = 'col-lg-6 mt-3'>
                <input type="submit" value="Edit"className='btn btn-primary'></input>
                    </div>
                </div>
        </div>
    </form>
    </div>
    </>
}