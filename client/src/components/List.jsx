import { useState } from "react";

import SmallButton from "./UI/SmallButton";
import EditForm from "./EditForm";


const List = ({city, remove, update}) => {
  const [updateState, setUpdateState] = useState(-1);
  const updateHandler = (id) => {
    setUpdateState(id)
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdateState(-1);
  }

  return (
    updateState === city.city_id 
    ? 
    <EditForm current={city} update={update} handleUpdate={handleUpdate}/> 
    :
      <tr>      
        <td>{city.city_name}</td>
        <td>{city.city_year}</td>
        <td>
          <SmallButton onClick={() => updateHandler(city.city_id)}>Update</SmallButton>
          <SmallButton onClick={() => remove(city.city_id)}>Delete</SmallButton>
        </td>
      </tr>
  );
};

export default List;