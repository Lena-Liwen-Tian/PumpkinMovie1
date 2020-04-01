import Button from '../shared/components/FormElements/Button';
import React from 'react';

import { create } from "react-test-renderer";
import { Link } from 'react-router';
import { mount, render,shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("test button",()=>{
    it("Matches the snapshot",()=>{
        const button = create(<Button />);
        expect(button.toJSON()).toMatchSnapshot();
    })
    it("renders the button with link to",()=>{
        const container1 =shallow(<Button to="/">Click</Button>);       
        const link = container1.find("Link");       
        expect(link.props().to).toEqual("/");          
    })
    it("renders the button with href",()=>{
    const container2 = shallow(<Button href="/">Click</Button>);
    const a = container2.find("a");
    expect(a.props().href).toEqual("/");
    });
    it("renders regular button",()=>{
        const container3 = shallow(<Button>Click</Button>);
        const b = container3.find("button");
        expect(b.props().children).toEqual("Click");
    });

})

