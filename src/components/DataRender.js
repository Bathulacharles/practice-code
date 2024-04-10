/*import React,{useEffect,useState} from "react";
import axios from "axios";
function DataRender(){
    let [userData,setUserData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                console.log(response.data)
                setUserData(response.data)
            })
    },[])
    
    return(
        <>
        <h3>data render</h3>
        {
            userData.length>0 &&
                <table>
                <tr> 
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>username</th>
                    <th>city</th>
                </tr>
                {
                    userData.map((u)=>{
                        return(<>
                         <tr> 
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                            <td>{u.username}</td>
                            <td>{u.address.city}</td>
                        </tr>
                        </>)
                    })
                }
                
            </table>
        }
        </>
    )
}
export default DataRender;*/