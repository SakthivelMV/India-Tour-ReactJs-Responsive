import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Have a look st these places!!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/coorg.jpg'
              text='Hill station located among the mountains in Karnataka with the misty landscapes. '
              label='Green hills'
              path='/services'
            />
            <CardItem
              src='images/khajuraho-Temples.jpg'
              text='Listed as A UNESCO World Heritage Site, the temples represent the rich and heritage of India.'
              label='Heritage'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/maha.jpg'
              text='Town on a strip of land between the Bay of Bengal and the Great Salt Lak'
              label='Heritage'
              path='/services'
            />
            <CardItem
              src='images/varanasi.jpg'
              text='Varanasi is one of the most vibrant and charismatic places to visit in India.It is often mistaken that spiritual places'
              label='Nature'
              path='/products'
            />
            <CardItem
              src='images/Tawang.jpg'
              text='Discovering one of the most surreal and captivating tourist places in India'
              label='Discover'
              path='/sign-up'
            />
          </ul>
          More....
        </div>
      </div>
    </div>
  );
}

export default Cards;
