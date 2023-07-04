import 'react-quill/dist/quill.snow.css';
import './App.css'
import Editor from './components/Editor';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState("")

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='container'>
      <div className="row">
        <Editor value={value} setValue={handleValue}/>
      </div>
    </div>
  )
}

export default App
