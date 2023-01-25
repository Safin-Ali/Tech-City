import React from 'react';

const SelectFeild = ({options,setValCallback}) => {

    const handleSelectedValue = (e) => {
        return setValCallback(e.target.value || null)
    }

    return (
        <div className={`my-3`}>
            <select id="countries" defaultValue={'null'} onChange={handleSelectedValue} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value='null' disabled={true}>Choose Brand</option>
                {
                    options?.map( elm => <option key={elm._id} value={elm.brandName}>{elm.brandName}</option>)
                }
            </select>
        </div>
    );
};

export default SelectFeild;