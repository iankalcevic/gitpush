import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import DestinationSelector from './components/DestinationSelector'


const API_URL = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'


function App() {
 const [tours, setTours] = useState([])
 const [filteredTours, setFilteredTours] = useState([])
 const [selected, setSelected] = useState('All Destinations')
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(null)


 const fetchTours = async () => {
   setLoading(true)
   try {
     const res = await fetch(API_URL)
     const data = await res.json()
     setTours(data)
     setFilteredTours(data)
     setError(null)
   } catch (err) {
     setError('Failed to fetch tours.')
   } finally {
     setLoading(false)
   }
 }


 useEffect(() => {
   fetchTours()
 }, [])


 useEffect(() => {
   if (selected === 'All Destinations') {
     setFilteredTours(tours)
   } else {
     setFilteredTours(tours.filter(tour => tour.name === selected))
   }
 }, [selected, tours])


 const removeTour = (id) => {
   const newTours = filteredTours.filter(tour => tour.id !== id)
   setFilteredTours(newTours)
 }


 return (
   <main>
     <h1> Tour Explorer</h1>
     <DestinationSelector tours={tours} selected={selected} setSelected={setSelected} />
     <Gallery
       tours={filteredTours}
       loading={loading}
       error={error}
       onRemove={removeTour}
       onRefresh={fetchTours}
     />
   </main>
 )
}


export default App
