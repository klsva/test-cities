import React from 'react';
import { useState } from 'react';
import Button from './UI/Button';
import Input from './UI/Input';

const AddForm = ({create}) => {
  const [city, setCity] = useState({name: '', year: ''})

  const addNewCity = (e) => {
    e.preventDefault()
    const newCity = {
      ...city
    }
    create(newCity)
    setCity({name:'', year:''})
  }  

  return (
    <form className='cityForm'>
      <Input
        type='text'
        placeholder='city name'
        value={city.name}
        onChange={e => setCity({...city, name: e.target.value})}
      />
      <Input
        type='text'
        placeholder='city year'
        value={city.year}
        onChange={e => setCity({...city, year: e.target.value})}
      />
      <Button onClick={addNewCity}>Add city</Button>
    </form>
  );
};

export default AddForm;