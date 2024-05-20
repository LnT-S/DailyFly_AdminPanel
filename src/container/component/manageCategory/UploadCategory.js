import React from 'react';
import '../../assets/css/uploadcat.css'
import { Link } from 'react-router-dom';

const Uploadcategory = () => {
    const categories = [
        {
            id: 'Good Morning'
        },
        {
            id: 'Good Night'
        },
        {
            id: 'Motivational'
        },
        {
            id: 'Love'
        }
    ]
    return (
            <div className="man-cat">

                <h1 className='login'>Add New Category</h1>

                <div className="maincategory">
                    <form action="" method="post">
                        <div className="form-group1">
                            <label for="username" className="text1">Select Language:</label>
                            <select id="languag" name="lang" className="dropdown uppercase" size="1">
                                <option value="hindi" className='dropdown-content'>Hindi</option>
                                <option value="english"
                                className='dropdown-content'>English</option>
                                <option value="marathi"
                                className='dropdown-content'>Marathi</option>
                                <option value="wallpaper"
                                className='dropdown-content'>Wallpaper</option>
                            </select>
                        </div>
                        <div className="form-group1">
                        <label for="username" className="text1">Enter Custom Category:</label>
                        <input type="text" id="customCategorys" name="category" placeholder="Enter Custom Category" />
                        </div>
                        <div className="form-group1" style={{flexDirection: 'row',alignItems:'center'}}>
                        <label for="username" className="text1">Special:</label>
                        <input type="checkbox" name="special" id="toggleRadioBtn"/>
                        </div>
                        <button className="button" type="submit">Add Category</button>

                        
                      
                    </form>

                </div>
            </div>
    );

}
export default Uploadcategory
