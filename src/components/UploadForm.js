import React, {useState } from 'react'
import ProgressBar from './ProgressBar'
function UploadForm() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError("abbe ( png or jpeg ) mein se koi file daal GADDHE   ")

        }
    }
    return (
        <form >
            <div className="form-container">
                <label>
                    <input type="file" onChange={changeHandler} />
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="error "> {error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </div>

        </form>
    )
}

export default UploadForm;
