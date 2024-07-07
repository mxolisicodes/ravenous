import React from 'react';
import './Business.css';

const Business = () =>{
    const business = {
      imageSrc: 'https://www.lapergola.co.za/',
      name: 'La Pergola',
      address: '44 Stanley Ave, Braamfontein Werf',
      city: 'Johannesburg',
      Province:'Gauteng',
      zipcode: '2092',
      category: 'Italian',
      rating: 4.0,
      reviewCount:184
    };
  
    return (
        <div className='business'>
            <div className='image-container'>
                <img src={business.imageSrc} alt=''/>
            </div>
            <h2>{business.name}</h2>
            <div className='business-information'>
                <div className='business-address'>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipcode}</p>
                </div>
                <div className='business-reviews'>
                    <h3>{business.category}</h3>
                    <h3 className='rating'>{`${business.rating} stars`}</h3>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>

    );
  }


export default Business;