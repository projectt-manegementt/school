import React from 'react'
import './HomePage.css'
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import Teacher from './teacher';
import Swal from 'sweetalert2';
function HomePage() {
    const navig= useNavigate()
    const Alert6=()=>{
        Swal.fire('Switched to teacher space')
      }

  return (
    <div  className='home__img'>
      <h1>Welcome to Schooly</h1><br></br><br></br>
      <br></br><button className="batouna"  onClick={()=>{navig('/Teacher')
    Alert6()}} >Teacher's space</button><br></br><br></br>
               
               <div className='course'>
          <h3>About us:</h3>
          <ul>
          
            
         <h4>Schooly provides you with the best user experience that allows you to get amuse using our application</h4><br></br>
              
           
          </ul>
        </div>

        <br></br><img   src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGvbaoXxFt94XHKvBendF3jFq8NtZnqnO2Q&usqp=CAU'/>
 
    </div>
  )
}

export default HomePage