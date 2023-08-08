import React from "react";
import { Form } from "../form";

export const Card=({userName,userAge, setdata, id})=>{

    const [input, setInput]=React.useState(false)

    const deleteItem=()=>{
        setdata((p)=>p.filter((item)=> item.id !==id))
    }

    return (
        <div style={{
            paddingTop:"20px"
        }}>
        {input ? (<Form setInput={setInput} setdata={setdata} id={id} dValue={{userName, userAge}}/>) : (
            <>
            <h1>{userName}</h1>
            <p>{userAge}</p>
            <button onClick={deleteItem}>Delete</button>
            <button onClick={()=> setInput(true)}>Edit</button>
            </>
        )
        }
    </div>
    )
}