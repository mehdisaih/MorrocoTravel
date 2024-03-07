import React from 'react';
import './Cards.css';
import CardItem from './CardsItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/Image1.jpg'
                            text='Marrakech, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces, and gardens, famous for its bustling souks and Jemaa el-Fnaa square.'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/Image2.jpeg'
                            text='Casablanca is Morocco largest city, known for its modern business district and historical sites including the stunning Hassan II Mosque'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/Image3.jpg'
                            text='Ifrane is a mountain town in Morocco Middle Atlas region , known for its alpine-style architecture and nearby ski resorts often referred to as the Switzerland of Morocco.'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/Image4.jpg'
                            text='Taghazout is a quaint Moroccan fishing village turned renowned surfing destination on the Atlantic coast north of Agadir.'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/Image5.jpg'
                            text='Essaouira is a coastal city in Morocco, known for its well-preserved 18th-century fortifications, windy beaches ideal for surfing, and vibrant arts scene.'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;