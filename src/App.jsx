import React from "react"
import { Form } from "./components/form"
import { Card } from "./components/card/card"

function App() {
  const [data, setdata] =React.useState([])
  return (
    <>
    <Form setdata={setdata} />
    {data.map((el)=> 
    (<Card key={el.id} setdata={setdata} {...el}/>)
    )}
    </>
  )
}

export default App
