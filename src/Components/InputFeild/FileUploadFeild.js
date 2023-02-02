import React from 'react';
import {BsUpload} from 'react-icons/bs';

const FileUploadFeild = ({name}) => {
    return (
        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <BsUpload></BsUpload>
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MIN & MAX 500x500px)</p>
                </div>
                <input id="dropzone-file" type="file" className="opacity-0" name={name} required/>
            </label>
        </div>
    );
};

export default FileUploadFeild;