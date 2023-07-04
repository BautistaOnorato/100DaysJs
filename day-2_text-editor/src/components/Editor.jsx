/* eslint-disable react/prop-types */
import ReactQuill from 'react-quill';
import { modules } from '../utils/modules';

const Editor = ({ value, setValue }) => {
  return (
    <div className="editor">
      <ReactQuill 
        theme='snow' 
        value={value} 
        onChange={setValue} 
        className='editor-input' 
        modules={modules}
      />
    </div>
  )
}

export default Editor