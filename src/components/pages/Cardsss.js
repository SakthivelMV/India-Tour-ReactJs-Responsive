import React from 'react';
import './Cardss.css';
import CardItem from '../CardItem';
function Cardsss() {
  return (
    <div className='cards'>
      <h1>Get our Heritage Products as our Love and Memory</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/spices.jpg'
              text='Indian spices include a variety of spices grown across the Indian subcontinent.With different climates in different parts of the country'
              label='Taste'
              path='/services'
            />
            <CardItem
              src='images/kanjivaram.jpg'
              text='The traditional Kanchipuram Silks originated 150 years ago and are known for their durability. With a multitude of colour combinations and rich borders'
              label='Wearables'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/kerala.jpg'
              text='One of the interesting wood arts comes from Kerala.In Kerala the intricate art comes with fragrant wood i.e sandalwood. '
              label='Wood Decor'
              path='/services'
            />
            <CardItem
              src='images/tea.jpg'
              text='The most popular tea varieties in India are Assam Tea,Darjeeling Tea,Terai Tea,Kangra Tea,Nilgiri Tea and Annamalai Tea, Wayanad, Travancore and Munnar Tea, Karnataka Tea'
              label='Drinks'
              path='/products'
            />
            <CardItem
              src='images/toys.jpg'
              text='Kondapalli toys are made of wood and ceramic and have carved a niche of their own in the beaten souvenir market. They generally resemble gods or goddesses and are traditionally made by women during festivals.'
              label='Toys'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardsss;
