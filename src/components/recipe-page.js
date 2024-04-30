import React from 'react';
import styles from './recipe-page.module.css';
import BannerImage from '../assets/images/image-omelette.jpeg';

const RecipePage = () => {
    return (
      <div className={styles.container}>
          <img src={BannerImage} alt="Banner" className={styles.bannerImage}/>
      </div>
    );
  }
  
  export default RecipePage;