import React from 'react';
import './Cardss.css';
import CardItem from '../CardItem';
function Cardss() {
  return (
    <div className='cards'>
      <h1>Choose among the various travel modes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/train2.jpg'
              text='India has some of the most spectacular and unforgettable rail journeys in the world'
              label='Train'
              path='/services'
            />
            <CardItem
              src='images/road.png'
              text='The majority of existing highways are now four-lane roads (two lanes in each direction), though much of this is being expanded to six or more lanes'
              label='Road'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ship.jpg'
              text='Waterways have always been an important mode of transport in Kerala. The total length of navigable route in Kerala was 1,900 kilometres'
              label='Water'
              path='/services'
            />
            <CardItem
              src='images/cruise.jpg'
              text='The cruises which ply from Chennai Port are Jalesh Cruise, CroisiEurope and government run passenger ships'
              label='Sea'
              path='/products'
            />
            <CardItem
              src='images/air.jpg'
              text='Airways are one of the most comfortable and fastest modes of transportation. High mountains, deserts, and dense forests are made accessible by air transport. '
              label='Air'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardss;
