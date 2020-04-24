import React from 'react';
import { create } from "react-test-renderer";
import ShowTimeList from '../showtimes/components/ShowTimeList';
import ShowTimeItem from '../showtimes/components/ShowTimeItem';
import { mount,shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Weekday from '../showtimes/components/weekday';
import { Link, MemoryRouter } from 'react-router';
import Calendar from '../showtimes/components/calendar';
import ShowTime from '../showtimes/pages/ShowTime';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import {render,unmountComponentAtNode} from 'react-dom';
import { FetchMock } from 'fetch-mock';
import {addWeeks,subWeeks,addMonths,subMonths,startOfWeek,addDays,format,isSameMonth,isSameDay,endOfWeek,startOfMonth,endOfMonth,parse} from 'date-fns';
configure({ adapter: new Adapter() });


   describe("test showtimesitem",()=>{
        it("should render 5 h6 showtimesitem",()=>{
            const showtimesitem =shallow(<ShowTimeItem date="2015-05-05" imdbID="345"
            theatre="Alamo" theatreid="1" des="good" image="app.jpg" title="Hulu" time="12"/>);     
            expect(showtimesitem.find("h6").length).toBe(5);        
        })
        it("should render 1 img showtimesitem",()=>{
            const showtimesitem =shallow(<ShowTimeItem date="2015-05-05" imdbID="345"
            theatre="Alamo" theatreid="1" des="good" image="app.jpg" title="Hulu" time="12"/>);     
            expect(showtimesitem.find("img").length).toBe(1);        
        })
        it("should have 3 links",()=>{
            const showtimesitem =shallow(<ShowTimeItem date="2015-05-05" imdbID="345"
            theatre="Alamo" theatreid="1" des="good" image="app.jpg" title="Hulu" time="12"/>);     
            expect(showtimesitem.find("Link").length).toBe(3);        
            expect(showtimesitem.find("Link").at(0).prop("to")).toBe("/description/345");
        })
    });
    describe("test showtimelist",()=>{
        it("timelist list rendered correctly",()=>{
            let LoadedShowtimes = [{
                key: "123",_id:"123",date:"2015-05-05",imdbID:"123",theatre:{name:"hello",theatreid:1},cinemaid:"1"
            }];
            const showtimelist= shallow(<ShowTimeList items={LoadedShowtimes}/>);
            expect(toJson(showtimelist)).toMatchSnapshot();
        })
        it("timelist list have only one item now",()=>{
            let LoadedShowtimes = [{
                key: "321",_id:"123",date:"2015-05-05",imdbID:"123",theatre:{name:"hello",theatreid:"1"},cinimaid:"1"
            }];
            const showtimelist= shallow(<ShowTimeList items={LoadedShowtimes}/>);
            expect(showtimelist.find("ShowTimeItem").length).toBe(1);
        })
    })
    describe("test showtime page",()=>{
        let container;
        beforeEach(()=>{
            container = document.createElement("div");
            document.body.appendChild(container);
        });
        afterEach(()=>{
            unmountComponentAtNode(container);
            container.remove();
            container = null;
        })
    });
    describe("test Calender",()=>{
        it("should render Calendar correctly",()=>{
        let calendar = shallow(<Calendar />);
        expect(calendar.find("div").length).toBe(24);
        });

    });
    describe("test Showtimeitem",()=>{
        it("should render showtime item correctly",()=>{
        let showtimeitem = shallow(<ShowTimeItem key ="1" date="1" imdbID="1" theatre="1" theatreid="1" 
        des = "1" image="1" title="1" time="1"/>);
        expect(showtimeitem.find("h6").length).toBe(5);
        });
        it("should render showtime image correctly",()=>{
            let showtimeitem = shallow(<ShowTimeItem key ="1" date="1" imdbID="1" theatre="1" theatreid="1" 
            des = "1" image="1" title="1" time="1"/>);
            expect(showtimeitem.find("img").length).toBe(1);
            });
    

    });
    describe("test Weekday",()=>{
        it("should render weekday item correctly",()=>{
        let weekday = shallow(<Weekday />);
        expect(weekday.find("div").length).toBe(1);
        });
       
    });
  
