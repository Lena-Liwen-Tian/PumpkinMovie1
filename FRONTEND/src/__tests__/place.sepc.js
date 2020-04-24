
import React from 'react';
import { Link } from 'react-router';
import { mount, render,shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceItem from '../places/components/PlaceItem';
import PlaceList from '../places/components/PlaceList';
import Singleplace from '../places/components/SinglePlace';
import SingleplaceItem from '../places/components/SinglePlaceItem';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });


describe("test placeitem",()=>{
    let placeitem;
    beforeEach(()=>{
        placeitem = shallow(<PlaceItem key="1" id="1" image="x.jpg" title = "Alamo"
        address="ut" phone="123" lat="123" lng ="567"/>);
    });
 
    it("should render item with lat and lng",()=>{
     expect(placeitem.find("img").length).toBe(1);
  });
   it("should have a correct link",()=>{
       expect(placeitem.find("Link").prop("to")).toBe("/1/theaterinfo");
   })

});

describe("test placelist",()=>{
    let theatres=[{cinema_id:"1",image:"x.jpg",cinema_name:"Alamo",address:"ut",phone:"123",lat:"123",lng:"567"}];
    it("should render only one item",()=>{
        const items = shallow(<PlaceList items={theatres}/>);
        expect(items.find("PlaceItem").length).toBe(1);
    });
    let LoadedTheatre = {"cinema_name":"1", "cinema_id": "1","image":"nothing","address":"nothing",
    "phone":"123344","lat":"123","lng":"567"};
    it("should render Singleplace item correctly",()=>{
        const singleitem = shallow(<SingleplaceItem name={LoadedTheatre.cinema_name} cinemaid = {LoadedTheatre.cinemaid} image={LoadedTheatre.image}
            address = {LoadedTheatre.address} phone ={LoadedTheatre.phone} lat = {LoadedTheatre.lat} lng = {LoadedTheatre.phone}
            movies ="mothing" imdbID="2" have="True"/>);
        expect(singleitem.find("img").length).toBe(1);
    });
    
})