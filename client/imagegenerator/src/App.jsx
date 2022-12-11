import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Result from './components/Result'

function App() {
  const [data, setData] = useState(null)
  const [prompt, setPrompt] = useState("")
  const [size, setSize] = useState("")
  const [imageUrl, setImageUrl ] = useState("")
  const [spinner, setSpinner ] = useState(false)
  const [defaultMessage, setDefaultMessage] = useState(true)

  axios.defaults.baseURL = "http://127.0.0.1:5000";

   //* handle post request
  const postData = async()=>{
    const url = '/openai/generateimage'

    const data = {
      prompt,
      size: size === "" ? "small" : size
    }
    
    const response = await axios.post(url, data)
    const responseData = await response.data.data
    if(responseData){
      setImageUrl(responseData)
      setSpinner(false)
    }
  }

  //*send the data inserted by de user
  const sendData = (e) => {
    e.preventDefault()
    if(prompt !== ""){
      setDefaultMessage(false)
      setSpinner(true)
      postData()
    }
  }

  return (
    <>
      <div className="w-full h-24 bg-slate-600  text-white flex items-center justify-center	">
        <h1 className='mainTitle text-5xl font-bold text-center'>Image generator</h1>
      </div>
      <div className='playgroundContainer w-full flex flex-row'>
      <div className='controlContainer p-8 w-1/4 bg-slate-800 h-screen flex flex-col items-center'>
            <form
                onSubmit={sendData}
            >
                <h2 className='text-3xl m-2 text-white text-left'>Insert your prompt</h2>
                <input
                    className='w-full rounded-md h-8'
                    type="text"
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <h2 className='text-3xl m-2 mt-4 text-white text-left' >Select the image size</h2>
                  <select className='w-full rounded-md h-8' name="" id="" onChange={(e) => setSize(e.target.value)}>
                      <option value="small">small</option>
                      <option value="medium">medium</option>
                      <option value="large">large</option>
                  </select>
                <button className='bg-red-500 w-full mt-4 justify-center h-8 rounded-md text-1xl text-white text-lef hover:brightness-105' type='submit'>
                    Generate
                </button>
            </form>
        </div>
        <Result
        imageUrl={imageUrl}
        spinner={spinner}
        defaultMessage={defaultMessage}
        />
      </div>
    </>

  )
}

export default App
