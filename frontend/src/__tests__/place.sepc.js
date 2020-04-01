
import React from 'react';
import { Link } from 'react-router';
import { mount, render,shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceItem from '../places/components/PlaceItem';
import PlaceList from '../places/components/PlaceList';
import SinglePlace from '../places/components/SinglePlace';
import SinglePlaceItem from '../places/components/SinglePlaceItem';
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
    
})