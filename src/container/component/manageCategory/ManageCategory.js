import React from 'react';
import '../../assets/css/managecat.css'
import { Link } from 'react-router-dom';

const Managecategory = () => {
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
        },
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
        },
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
    let d = 'red'
    const styles = {
        text : {
            color : d
        }
    }
    return (
            <div className="man-cat">

                <h1 className='login'>Manage Category</h1>

                <form id="mngCat" action="" method="Post" className="mngCat">
                    {categories.map((item, index) => (
                        <div className="category-list addCategoryBtn">
                            <div className="category" style={{color: 'whitesmoke', fontFamily: 'sans-serif', fontSize: '20'}}>{item.id}</div>
                            <div className="close-button" style={{color: 'white'}}>X</div>
                        </div>
                    ))}
                </form>


            </div>
    );

}

export default Managecategory
