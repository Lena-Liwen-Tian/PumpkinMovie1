import React from 'react';
import ShowTimeList from '../showtimes/components/ShowTimeList';

const ShowTime = props => {
    const MOVIES = [
        {
          id: '1',
          name: 'ONWARD',
          image:
            'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/219053/Onward_Payoff-2020.jpg',
          
          length:'1 hr 43 min',
          descriptions:'Onward is a 2020 American computer-animated urban fantasy film produced by Pixar Animation Studios for Walt Disney Pictures. The film is directed by Dan Scanlon, produced by Kori Rae from a screenplay written by Scanlon, Jason Headley and Keith Bunin, and stars the voices of Tom Holland, Chris Pratt, Julia Louis-Dreyfus, and Octavia Spencer. Set in a suburban fantasy world, the film follows two elf brothers who set out on a quest to find a spell that will bring back their deceased father.',
          genre:['Action','Adventure'],
          rating:'4.8',
          showtimes:[{theater:'Topfer Theatre',times:["2020-03-08 15:45","2020-03-08 13:55","2020-03-09 08:30"]},
          {theater:'Flix Brewhouse Round Rock',times:["2020-03-09 15:45","2020-03-09 13:55","2020-03-10 08:30","2020-03-10 13:20"]},
          {theater:'Rollins Theatre',times:["2020-03-11 15:45","2020-03-11 13:55","2020-03-11 08:30","2020-03-11 13:20"]}]
        },{
          id: '2',
          name: 'THE INVISIBLE MAN',
          image:
            'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/221261/TheInvisibleMan_teaser-2020.jpg',
          length:'2 hr 4min',
          descriptions:'The Invisible Man is a 2020 science fiction horror film written and directed by Leigh Whannell. A contemporary adaptation of the novel of the same name by H. G. Wells and a reboot of The Invisible Man film series of the 1930s-1950s, it follows a woman who, after the apparent suicide of her abusive and wealthy boyfriend, believes she is being stalked by him. She ultimately deduces that he has acquired the ability to become invisible. The film stars Elisabeth Moss, Aldis Hodge, Storm Reid, Harriet Dyer, Michael Dorman, and Oliver Jackson-Cohen. It is an international co-production of the United States and Australia.',
          genre:['Horrors','Suspense','Thriller'],
          rating:'5.0',
          showtimes:[{theater:'Cinemark 20 and XD',times:["2020-03-08 15:45","2020-03-08 13:55","2020-03-09 08:30"]},
          {theater:'Rollins Theatre',times:["2020-03-09 15:45","2020-03-09 13:55","2020-03-10 08:30","2020-03-10 13:20"]},
          {theater:'Topfer Theatre',times:["2020-03-11 15:45","2020-03-11 13:55","2020-03-11 08:30","2020-03-11 13:20"]},
          {theater:'Flix Brewhouse Round Rock',times:["2020-03-11 19:30","2020-03-11 20:40"]}]
    
        },{
          id:'3',
          name:'BRAHMS:THE BOY ||',
          image:'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/218575/BrahmsTheBoyII2020.jpg',
          length:'1 hr 26min',
          description:'The Boy II is a 2020 American supernatural horror film starring Katie Holmes, Ralph Ineson, Owain Yeoman, and Christopher Convery. A stand-alone sequel to the 2016 film The Boy, it is directed by William Brent Bell and written by Stacey Menear, the respective director and writer of the original film. The plot follows a young boy who, after moving into a mansion with his parents following a traumatizing incident, finds a life-like doll he becomes attached to.',
          genre:['Horror','Suspense','Thriller'],
          rating:'3.8',
          showtimes:[{theater:'Cinemark 20 and XD',times:["2020-03-08 15:45","2020-03-08 13:55","2020-03-09 08:30"]},
          {theater:'Flix Brewhouse Round Rock',times:["2020-03-09 15:45","2020-03-09 13:55","2020-03-10 08:30","2020-03-10 13:20"]},
          {theater:'Topfer Theatre',times:["2020-03-11 15:45","2020-03-11 13:55","2020-03-11 08:30","2020-03-11 13:20"]},
          {theater:'Rollins Theatre',times:["2020-03-11 19:30","2020-03-11 20:40"]}]
        },{
          id:'4',
          name:'IMPRACTICAL JOKERSK',
          image:'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/222272/impracticaljokers-Jmovie-300x450.jpg',
          length:'1 hr 40min',
          description:'In MY BOYFRIEND\'S MEDS, Sandra Echeverria plays Jess, a talented, high-powered marketing executive who falls for Hank (Jaime Camil), a charming mattress store owner she meets while shopping for a new mattress. Hank\'s charm and good looks make Jess believe he is \'Mr. Right,\' but Hank actually suffers from multiple disorders for which he takes what seems like an endless assortment of prescription medications. On the night Hank decides to reveal his issues to Jess, she surprises him with an invite to accompany her on a business retreat to an island resort. Surprised by this next step in their relationship, he keeps his secret a little longer. After arriving at the remote island, Hank is horrified to discover that he doesn\'t have his meds. Comedy and chaos ensues as Hank is no longer able to control his various symptoms.',
          genre:['Comedy'],
          rating:'3.5',
          showtimes:[{theater:'Cinemark 20 and XD',times:["2020-03-08 15:45","2020-03-08 13:55","2020-03-09 08:30"]},
          {theater:'Topfer Theatre',times:["2020-03-09 15:45","2020-03-09 13:55","2020-03-10 08:30","2020-03-10 13:20"]},
          {theater:'Rollins Theatre',times:["2020-03-11 15:45","2020-03-11 13:55","2020-03-11 08:30","2020-03-11 13:20"]},
          ,{theater:'Flix Brewhouse Round Rock',times:["2020-03-12 19:30","2020-03-12 20:40"]}]
        },{id:'5',
        name:'THE CALL OF THE WILD',
        image:'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/221546/TheCallOfTheWild2020.jpg',
        length:'1 hr 40min',
        description:'The Call of the Wild is a 2020 American adventure film based on the Jack London 1903 novel of the same name and Twentieth Century Pictures\' previous 1935 film adaptation. The film is directed by Chris Sanders, in his live-action directorial debut, written by Michael Green, and stars Harrison Ford, Dan Stevens, Omar Sy, Karen Gillan, Bradley Whitford, and Colin Woodell. Set in the 1890s Klondike Gold Rush, a dog named Bucky is stolen from his home in California and sent to the Yukon, where he befriends an old man and begins a life-altering adventure.',
        genre:['Action','Adventure'],
        rating:'4.5',
        showtimes:[{theater:'Rollins Theatre',times:["2020-03-12 15:45","2020-03-12 13:55","2020-03-12 08:30"]},
        {theater:'Flix Brewhouse Round Rock',times:["2020-03-09 15:45","2020-03-09 13:55","2020-03-10 08:30","2020-03-10 13:20"]},
        {theater:'Cinemark 20 and XD',times:["2020-03-11 15:45","2020-03-11 13:55","2020-03-11 08:30","2020-03-11 13:20"]},
        ,{theater:'Topfer Theatre',times:["2020-03-12 19:30","2020-03-12 20:40"]}]
        },
        {id:'6',
        name:'BAD BOYS FOR LIFE',
        image:'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/185731/BadBoysForLife2020.jpg',
        length:'1 hr 40min',
        description:'Bad Boys for Life is a 2020 American action comedy film directed by Adil El Arbi and Bilall Fallah as well as written by Chris Bremner, Peter Craig and Joe Carnahan. The sequel to Bad Boys II (2003), it is the third installment in the Bad Boys franchise and is based on a story by Craig and Carnahan. The film stars Will Smith, Martin Lawrence, Vanessa Hudgens, Alexander Ludwig, Charles Melton, Paola Núñez, Kate del Castillo, Nicky Jam, and Joe Pantoliano. Smith co-produced the film with Jerry Bruckheimer and Doug Belgrad. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey\'s troubled past.A third Bad Boys film was discussed after the success of the second, with Michael Bay stating he would be interested in returning to direct but budgetary constraints would make it difficult. The film went through several attempts to enter development over the course of a decade, with a variety of writers and directors attached. The project was eventually finalized and green-lit in October 2018, and filming began the following year, lasting from January to June 2019. Filming took place in Atlanta, Miami and Mexico City.',
        genre:['Action','Adventure','Comedy'],
        rating:'3.5',
        showtimes:[{theater:'Flix Brewhouse Round Rock',times:["2020-03-15 15:45","2020-03-12 13:55","2020-03-12 09:30"]},
        {theater:'Topfer Theatre',times:["2020-03-09 15:45","2020-03-09 13:55","2020-03-10 08:30","2020-03-10 15:20"]},
        {theater:'Cinemark 20 and XD',times:["2020-03-13 15:45","2020-03-11 13:55","2020-03-17 09:30","2020-03-11 13:20"]},
        ,{theater:'Rollins Theatre',times:["2020-03-12 19:30","2020-03-18 20:40"]}]
        }
      ];




      return <ShowTimeList items={MOVIES} />;
};



export default ShowTime;