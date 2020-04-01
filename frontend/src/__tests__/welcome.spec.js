import React from 'react';
import { mount, render,shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link, MemoryRouter } from 'react-router';
import App from '../App';
import Welcome from '../welcome/welcome';

configure({ adapter: new Adapter() });
describe("test welcome",()=>{
    it("it should render right route",()=>{
        const wrapper = mount(<MemoryRouter initialEntries={['/']}>
        <App /></MemoryRouter>);
        expect(wrapper.find(Welcome)).toHaveLength(1);
    });    
    it("it should render a carousel",()=>{
        const root = shallow(<Welcome/>);
        expect(root.find("ControlledCarousel").length).toBe(1);
    })
   
})