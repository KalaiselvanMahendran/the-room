import React from 'react'
import MainBoard from './MainBoard';
import axios from 'axios';

export default function Dashboard(props) {
    const checkForLogin = () => {
        return localStorage.getItem("access_token");
      };
    
    const renderContent = () => {
        const access_token = localStorage.getItem('access_token');
         if(access_token) {
          axios({
            method:'GET',
            url:'http://127.0.0.1:8000/api/checkcompany',
            headers:{
             Authorization: `Bearer ${access_token}`
            }
          })
          .then((res) => {
            if(res.data.data !== "works" && res.data.role === 1) {   
              props.history.push('/newuser')
            }
         })
         return <MainBoard/>

         } 
      };
      return (
        <div>{checkForLogin() ? renderContent() : props.history.push("/")}</div>
      );
}
