import React from 'react';
import Carousel from 'nuka-carousel';

export default class ImageCarousel extends React.Component {
  render() {
    return (
      <Carousel className="section-container">
        <img src="https://www.mamaslikeme.com/wp-content/uploads/2019/05/shutterstock_772005289-1200x800.jpg" alt='User img' />
        <img src="http://www.ritualwarsaw.com/EN/Upload/DSC_8226-kopia_3%20(2).jpg" alt='User img' />
        <img src="https://yourspost.com/wp-content/uploads/2019/07/featured-image.jpeg" alt='User img' />
        <img src="https://www.explosion.com/wp-content/uploads/2019/10/bachelor.jpg" alt='User img' />
      </Carousel>
    );
  }
}