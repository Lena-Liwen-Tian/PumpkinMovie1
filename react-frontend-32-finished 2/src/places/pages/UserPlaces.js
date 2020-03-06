import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: '1',
      title: 'Topfer Theatre',
      description: 'Founded in 1932 as Austin Civic Theatre, ZACH Theatre is the longest continuously running theatre company in the state of Texas, and one of the ten oldest in the country. The company was renamed Zachary Scott Theatre Center in 1968 in honor of Austin-raised, Academy Award-nominated film star, Zachary Scott, best known for his popular films Mildred Pierce (1945) and Cass Timberlane (1947). In 1972, the 230-seat Kleberg Theatre opened, and in the late 1980’s ZACH embarked on a successful capital campaign to build the Whisenhunt Theatre, a new 130-seat theatre-in-the-round, classroom, administrative offices and costume shop space. In the early 1990’s ZACH moved to professional status with Actors’ Equity Association and was selected for a National Endowment for the Arts Advancement Grant. In 2012, the 420-seat Topfer Theatre opened, presenting Ahrens and Flaherty’s Ragtime, the opening production of the 2012-2013 DREAM Season. The new LEED-certified facility houses a proscenium stage with orchestra pit, fly tower, trapped floor, stage automation, and adjustable acoustics; donor lounge, and several art pieces commissioned for the venue—all ushering in a new era of theatre producing for Austin and ZACH.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/2/2d/Zach_topfer_theatre_austin_2014.jpg',
      address: '617 Congress Ave, Austin, TX 78701',
      phone:'(512) 443-3688',
      location: {
        lat: 41.444780,
        lng: -75.339830
      },
    },
    {
      id: '2',
      title: 'Flix Brewhouse Round Rock',
      description: 'It takes a lot of skilled story-tellers in Hollywood to create big screen magic. But when it all comes together at Flix Brewhouse, it can rock your world. It’s epic. We believe in delivering every nuance, laugh, thrill and chill in complete comfort, with the right kind of visual and surround-sound audio that makes your hair stand up at just the right time. And we are ninjas in the dark, catering to your every need, to make sure you don’t miss a minute of it. It’s how we do movies.',
      imageUrl:
  'https://www.flixbrewhouse.com/media/1176/theater.jpg',
      address: '20 W 34th St, New York, NY 10001',
      phone:'(512)244-3549',
      location: {
        lat: 30.488714,
        lng:  -97.679691
      }
      },{
      id: '3',
      title: 'Cinemark 20 and XD',
      description: 'Cinemark\'s only Pflugerville cinema is also one of their largest, with a whopping 20 screens, but, amazingly, no THX. What happened? Granted, the ability to deafen patrons from 12 different directions simultaneously is not really necessary for a complete moviegoing experience, but you wonder what happened between screen number one and screen number twenty. Instead, you can rattle your eardrums with the entirely acceptable DTS and SDDS sound they\'ve installed, and lounge in stadium seating up to 491 seats in the largest auditorium. Nice.',
      imageUrl:
        'https://media.bizj.us/view/img/11562581/cinemarkplayavista*1200xx4105-2318-0-0.jpg',
      address: '20 W 34th St, New York, NY 10001',
      phone:"(512) 989-8535",
      location: {
        lat: 30.451184, 
        lng: -97.663362
      } 
    },
    {
      id: '4',
      title: 'Rollins Theatre',
      description: 'The Long Center is Austin’s center stage, but we’re also Austin’s Front Row. Every day we bear witness to the city’s creativity, soul, and diversity. We’re proud to say that we’re a product of our environment, and even prouder to say that we’re cultivators of it. We have the best view of the city, so we see the Austin community clearly. That’s how we’re able to present the performances, music, movies, hangouts, festivals, and countless other interests that unite, delight, and inspire us all. We’re not just putting Austin culture on display. We’re extending a firsthand, front-row invitation to help shape it.',
      imageUrl:
        'https://orlandodatenightguide.com/wp-content/uploads/2019/07/Annie-Russell-Theatre-Interior-.jpg',
      address: '701 W Riverside Dr, Austin, TX 78704',
      phone:'(512) 457-5100',
      location: {
        lat: 30.260241, 
        lng: -97.750891
      },
    }
  ];
  
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
