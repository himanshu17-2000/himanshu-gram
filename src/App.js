import React,{useState} from 'react'
import Title from './components/Title'
import UploadForm from "./components/UploadForm"
import ImageGrid from './components/imageGrid'
import Modal from './components/Modal'


function App() {
  const [selected , setselected] =  useState(null)
  return (

    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setselected={setselected} />
     {selected&& <Modal setselected={setselected} selected= {selected}/> }
    </div>
  )
}



export default App;
