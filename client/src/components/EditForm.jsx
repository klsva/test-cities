import React from 'react';
import { useState } from 'react';
import Button from './UI/Button';
import Input from './UI/Input';

const EditForm = ({current, update, handleUpdate}) => {
  const [updatedCity, setUpdatedCity] = useState({name: '', year: ''})

  //TODO: check form
  const updateCity = (e) => {    
    e.preventDefault()
    if (updatedCity.name === '' || updatedCity.year === ''){
      updatedCity.name = current.name
      updatedCity.year = current.year
    }
    const newCity = {
      id: current.city_id,
       ...updatedCity
    }
     update(newCity)
     handleUpdate(e)
     setUpdatedCity({name:'', year:''})
   } 

  return(
    <tr>
      <td>
        <Input 
          type='text' 
          placaholder={current.name}
          value={updatedCity.name} 
          onChange={e => setUpdatedCity({...updatedCity, name: e.target.value})}
        />
      </td>
      <td>
        <Input 
          type='text' 
          value={updatedCity.year} 
          onChange={e => setUpdatedCity({...updatedCity, year: e.target.value})}
        />
      </td>
      <td><Button onClick={updateCity}>Update city</Button></td>
    </tr>
  )
}

export default EditForm;