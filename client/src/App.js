import './App.css';
import {useState} from 'react'
import {useFetching} from './hooks/useFetching'
import CityService from './API/city-service.js' 
import Button from './components/UI/Button';
import List from './components/List';
import AddForm from './components/AddForm';


function App() {
  const [cities, setCities] = useState([]);

  //get
  const getCities = async () => {
    let res = await CityService.getAll()
    setCities(res.data)
  }
  //create
  const [createCity, isCreateCityLoading, creatCityError] = useFetching( async (newCity) => {
    const response = await CityService.create(newCity)
    getCities()
  })
  //update
  const [updateCity, isUpdateCityLoading, UpdateCityError] = useFetching( async (updateCity) => {
    const response = await CityService.update(updateCity)
    getCities()
  })
  //delete
  const deleteCity = (id) => {
    console.log(id);
    setCities(cities.filter(t => t.city_id !== id))
    CityService.delete(id)
  }
  return (
    <div className="App">
      <div className='header'>
        <h1>Not console, but panel</h1>
      </div>
      <div className='navigation'>
        <AddForm create={createCity}/>
        <Button onClick={getCities}>Get all</Button>
      </div>      
      <div className='display'>        
        {
          cities.length > 0 
          ?
          (<table className='listTable'>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
            {cities.map(item => <List key={item.city_id} update={updateCity} remove={deleteCity} city={item} />)}
          </table>)
          :
          <p>No cities</p>
        }
      </div>        
    </div>
  );
}

export default App;
