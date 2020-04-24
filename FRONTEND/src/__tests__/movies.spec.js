import React from 'react';
import { create } from "react-test-renderer";
import Movies from '../movies/pages/Movies';
import { mount,shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieDescription from '../movies/pages/MovieDescription';
import MovieItem from '../movies/components/MovieItem';
import MovieList from '../movies/components/MovieList';
import { Link, MemoryRouter } from 'react-router';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import {render,unmountComponentAtNode} from 'react-dom';
configure({ adapter: new Adapter() });

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Moive component", () => {
    test("it shows a list of movies", async () => {
      const fakeResponse = {"movies":[{"_id":"5e7a3b484eedf7a695398b76","Title":"Bridesmaids","Year":"2011","Rated":"R","Released":"13 May 2011","Runtime":"125 min","Genre":"Comedy, Romance","Director":"Paul Feig","Writer":"Kristen Wiig, Annie Mumolo","Actors":"Kristen Wiig, Terry Crews, Maya Rudolph, Tom Yi","Plot":"Annie (Kristen Wiig), is a maid of honor whose life unravels as she leads her best friend, Lillian (Maya Rudolph), and a group of colorful bridesmaids (Rose Byrne, Melissa McCarthy, Wendi McLendon-Covey and Ellie Kemper) on a wild ride down the road to matrimony. Annie's life is a mess. But when she finds out her lifetime best friend is engaged, she simply must serve as Lillian's maid of honor. Though lovelorn and broke, Annie bluffs her way through the expensive and bizarre rituals. With one chance to get it perfect, she'll show Lillian and her bridesmaids just how far you'll go for someone you love.","Language":"English, Thai, Spanish","Country":"USA","Awards":"Nominated for 2 Oscars. Another 25 wins & 70 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.8/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"6.8","imdbVotes":"257,942","imdbID":"tt1478338","Type":"movie","DVD":"20 Sep 2011","BoxOffice":"$166,500,000","Production":"Universal Studios","Website":"N/A","Response":"True","id":"5e7a3b484eedf7a695398b76"},{"_id":"5e7a3b494eedf7a695398b77","Title":"Tommy Boy","Year":"1995","Rated":"PG-13","Released":"31 Mar 1995","Runtime":"97 min","Genre":"Adventure, Comedy","Director":"Peter Segal","Writer":"Bonnie Turner, Terry Turner","Actors":"Chris Farley, David Spade, Brian Dennehy, Bo Derek","Plot":"Tommy Callahan Jr. is a slow-witted, clumsy guy who recently graduated college after attending for seven years. His father, Big Tom Callahan, owns an auto parts factory in Ohio. When Tommy arrives back home, he finds he has a position at the factory waiting for him. His dad also introduces Tommy to the new brake pad division of the factory and to Tommy's soon-to-be stepmother, Beverly, and her son Paul. But when Big Tom dies, the factory threatens to go under unless the new brake pads are to be sold. Therefore, Tommy must go on the road to sell them, along with the assistance of Richard, Big Tom's right-hand man. Will Tommy save the company, or will the factory, and the town, go under?","Language":"English","Country":"USA","Awards":"1 win & 2 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNTMwZGU3MGUtZWE0Ni00YzExLWIyY2MtMmNmMDlmYTdmNzFkXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"42%"},{"Source":"Metacritic","Value":"46/100"}],"Metascore":"46","imdbRating":"7.1","imdbVotes":"73,023","imdbID":"tt0114694","Type":"movie","DVD":"09 Nov 1999","BoxOffice":"N/A","Production":"Paramount Home Video","Website":"N/A","Response":"True","id":"5e7a3b494eedf7a695398b77"},{"_id":"5e7a3b494eedf7a695398b78","Title":"The Thing","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"109 min","Genre":"Horror, Mystery, Sci-Fi","Director":"John Carpenter","Writer":"Bill Lancaster (screenplay), John W. Campbell Jr. (story)","Actors":"Kurt Russell, Wilford Brimley, T.K. Carter, David Clennon","Plot":"A US research station, Antarctica, early-winter 1982. The base is suddenly buzzed by a helicopter from the nearby Norwegian research station. They are trying to kill a dog that has escaped from their base. After the destruction of the Norwegian chopper the members of the US team fly to the Norwegian base, only to discover them all dead or missing. They do find the remains of a strange creature the Norwegians burned. The Americans take it to their base and deduce that it is an alien life form. After a while it is apparent that the alien can take over and assimilate into other life forms, including humans, and can spread like a virus. This means that anyone at the base could be inhabited by The Thing, and tensions escalate.","Language":"English, Norwegian","Country":"USA","Awards":"3 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDcyZmFjY2YtN2I1OC00MzU3LWIzZGEtZDA5N2VlNDJjYWI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"57/100"}],"Metascore":"57","imdbRating":"8.1","imdbVotes":"348,811","imdbID":"tt0084787","Type":"movie","DVD":"28 Aug 2001","BoxOffice":"N/A","Production":"Universal Pictures","Website":"N/A","Response":"True","id":"5e7a3b494eedf7a695398b78"},{"_id":"5e7a3b494eedf7a695398b79","Title":"Best in Show","Year":"2000","Rated":"PG-13","Released":"20 Oct 2000","Runtime":"90 min","Genre":"Comedy","Director":"Christopher Guest","Writer":"Christopher Guest, Eugene Levy","Actors":"Jay Brazeau, Parker Posey, Michael Hitchcock, Catherine O'Hara","Plot":"The owners (and handlers) of five show dogs head for the Mayflower Kennel Club Dog Show. A film crew interviews them as they prepare for the trip, arrive at Philly's Taft Hotel, and compete. From Florida come the Flecks: she keeps running into old lovers. A wordless ancient in a wheelchair and his buxom trophy wife who may have a thing for the dog's handler own the two-time defending best in show, a poodle. From the piney woods of N.C. comes a fella who wants to be a ventriloquist. High-strung DINKs feud loudly in front of their Weimaraner. Two outré gay men from Tribeca round out the profiled owners. The dog show brings out the essence of the humans. Who will be best in show?","Language":"English","Country":"USA","Awards":"Nominated for 1 Golden Globe. Another 11 wins & 13 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ5OTc0NDU1MF5BMl5BanBnXkFtZTYwNzk1OTI3._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"7.4","imdbVotes":"52,623","imdbID":"tt0218839","Type":"movie","DVD":"15 May 2001","BoxOffice":"$16,574,225","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True","id":"5e7a3b494eedf7a695398b79"}]};
  
      jest.spyOn(window, "fetch").mockImplementation(() => {
        const fetchResponse = {
          json: () => Promise.resolve(fakeResponse)
        };
        return Promise.resolve(fetchResponse);
      });
  
      await act(async () => {
        render(<Movies />, container);
      });
  
      console.log(container.textContent);
  
      window.fetch.mockRestore();
    });
    test("it shows movie description", async()=>{
      let description = {Title:"a", Year :"2011","Resleased":3,"Director":"nothing","Writer":"nothing","Actors":"nothing",
    "imdbRating":"8.9","Runtime":"22h","Genre":"happy","des":"what"}
      let moviedes = shallow(<MovieDescription des = {description}/>);
      expect(moviedes.find("p").length).toBe(10);

    });
    test("it shows movie item correct", async()=>{
      let movies = {"imdbID":"a","poster":"nothing","Title":"3","time":"20h","Genre":"nothing","rating":"8.9"}
      let movieitem = shallow(<MovieItem key={movies.imdbID} id={movies.imdbID} image = {movies.Poster} name = {movies.Title}
      time = {movies.length} genre={movies.Genre} rating={movies.imdbRating}/>);
      expect(movieitem.find("p").length).toBe(2);

    });
    test("it shows movie List correct", async()=>{
      let movies = [{"imdbID":"a","poster":"nothing","Title":"3","time":"20h","Genre":"nothing","rating":"8.9"}];
      let movielist = shallow(<MovieList items = {movies}/>);
      expect(movielist.find("ul").length).toBe(1);

    }); 

  });

  
  