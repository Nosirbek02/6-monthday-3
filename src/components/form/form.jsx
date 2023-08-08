import React from "react";

export const Form = ({ setdata, dValue, id, setInput }) => {

    const [inputValue, setInputValue] = React.useState(dValue ? dValue :
        { userName: "", userAge: "", })

    const submit = (e) => {
        e.preventDefault()
        if (!id) {
            setdata((p) => [...p, { ...inputValue, id: Date.now() }])
            setInputValue({ userName: "", userAge: "", })
            return
        }
        setdata((p)=>p.map((item)=> item.id ===id  ? {...inputValue, id} : item))
        setInput(false)
    }

    const changeInput = (e) => {
        setInputValue((p) => ({ ...p, [e.target.name]: e.target.value }))
        console.log(inputValue);
    }

    return (
        <form onSubmit={submit}>
            <input onChange={changeInput} value={inputValue.userName} placeholder="Name" type="text" name="userName" />
            <input onChange={changeInput} value={inputValue.userAge} placeholder="Age" type="text" name="userAge" />
            <button type="submit">{id ? "Edit" : "Send"}</button>
        </form>
    )
}