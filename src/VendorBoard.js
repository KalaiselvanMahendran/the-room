import React, {useState} from 'react';
import Product from './Product';
import Error from './Error'
import axios from 'axios';

export default function VendorBoard(props) {
  const [isAdmin, setAdmin] = useState(false);
  const [role, setrole] = useState(false);

    const checkForLogin = () => {
      const access_token = localStorage.getItem('access_token');

      axios({
        method:'GET',
        url:'http://127.0.0.1:8000/api/checkcompany',
        headers:{
         Authorization: `Bearer ${access_token}`
        }
      })
      .then((res) => {
        console.log(res);
        if(res.data.data !== "works") {   
          props.history.push('/newuser')
        }
        console.log(res.data.role);
        const roles = res.data.role;

        if(roles === 1){
          setAdmin(true)
      }
      else{
        setrole(true);

          setTimeout(() => {
              props.history.push('/dashboard')
          }, 4000); 
          }
     })
  
     return ( isAdmin ? <Product/> : role && <Error/>
  ); 
                
      };
    
      const renderContent = () => {
        return "hello";
      };
      return (
        <div>{checkForLogin()}</div>
      );
}
