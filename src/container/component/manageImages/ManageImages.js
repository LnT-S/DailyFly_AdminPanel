import React, { useContext, useEffect, useState } from 'react'
import { useContextData } from '../../screen/Screen'
import DeleteIcon from '@mui/icons-material/Delete';


export default function ManageImages() {

  const server = process.env.REACT_APP_SERVER
  const { state, dispatch } = useContextData()

  const [languageFilter, setLanguageFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  const [stock, setStock] = useState([])
  const [categories, setcategories] = useState([])



  const handleDropdownChange = (event) => {
    setcategories(state.category[event.target.value])
    setLanguageFilter(event.target.value);
    setCategoryFilter('')
  };
  useEffect(() => {
    setStock(state.stock)
    console.log('updated categories', categories)
  }, [])



  return (
    <div className="man-cat">
    <h2 className='login'>MANAGE IMAGES</h2>
      <div style={{ display: 'flex', flexDirection: 'row' ,justifyContent: 'center', alignItems:'center'}}>
      
        <div className="form-group1">
          <label for="category" className="text1" >Select Language:</label>
          <select id="language" name="lang" class="dropdown uppercase" size="1" value={languageFilter} onChange={handleDropdownChange}>
            <option value="">All</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="marathi">Marathi</option>
            <option value="wallpaper">Wallpaper</option>
          </select>
        </div>
        <div className="form-group1">
          <label for="category" className="text1">Select Category:</label>
          <select id="category" name="category" size="1" class="dropdown uppercase" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="" class="uppercase">All </option>
            {categories !== undefined && categories.length > 0 && categories.map((item, index) => {
              return <option value={item} class="uppercase">{item} </option>
            })}
          </select>
        </div>
      </div>
      <div id="uploaded-images">
        {stock.length > 0 && stock.map((el, i) => {
          if ((languageFilter === '' || el.language.toLowerCase() == languageFilter) && (categoryFilter === '' || el.category === categoryFilter)) {
            return (<div key={i} style={{ position: 'relative'}}>
              <img src={`${server}${el.image}`} style={{ height: 200, width: 200, margin: 5 }} />
              <div
                style={{ position: 'absolute', top: 5, right: 5, cursor: 'pointer', fontSize: 20, color: 'white', backgroundColor: 'red', width: 30,textAlign:'center' }}
              ><DeleteIcon /></div>
            </div>)
          } else return
        })}
      </div>
    </div>
  )
}
