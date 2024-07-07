import React from 'react';
import styles from './Business.module.css';

const Business = () =>{
    const business = {
      imageSrc: 'https://i.pinimg.com/736x/e7/99/7a/e7997a52c18102161ac0c012bfcdb14a.jpg',
      name: 'La Pergola',
      address: '44 Stanley Ave, Braamfontein',
      city: 'Johannesburg',
      province:'Gauteng',
      zipcode: '2092',
      category: 'Italian',
      rating: 4.0,
      reviewCount:184
    };
  
    return (
        <div className={styles.Business}>
            <div className={styles.Imagecontainer}>
                <img src={business.imageSrc} alt=''/>
            </div>
            <h2>{business.name}</h2>
            <div className={styles.BusinessInfo}>
                <div className={styles.BusinessAdress}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.province} ${business.zipcode}`}</p>
                </div>
                <div className={styles.BusinessReviews}>
                    <h3>{business.category}</h3>
                    <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
  };


export default Business;