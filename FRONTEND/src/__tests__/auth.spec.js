import Auth from '../user/pages/Auth';
import { create } from "react-test-renderer";
import React from 'react';
import { mount,shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Link, MemoryRouter } from 'react-router';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import {render,unmountComponentAtNode} from 'react-dom';
configure({ adapter: new Adapter() });


describe("test auth",()=>{
    it("it should render auth correctly",()=>{
        const user = shallow(<Auth />)
       
        expect(user.find("Input")).toHaveLength(2);
    });   
    it("it should have correct form",()=>{
        const user = shallow(<Auth />)
       
        expect(user.find("form")).toHaveLength(1);
    });   
    it("it should have 1 card",()=>{
        const user = shallow(<Auth />)
       
        expect(user.find("Card")).toHaveLength(1);
    });    
    
   
})