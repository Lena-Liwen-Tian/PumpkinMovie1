import Button from '../shared/components/FormElements/Button';
import React from 'react';
import Card from '../shared/components/UIElements/Card';
import { create } from "react-test-renderer";
import { Link } from 'react-router';
import { mount, render,shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainHeader from '../shared/components/Navigation/MainHeader';
import NavLinks from '../shared/components/Navigation/NavLinks';
import Avatar from '../shared/components/UIElements/Avatar';
import Filter from '../shared/components/UIElements/Filter';
import PaginationPage from '../shared/components/UIElements/pagination';
import SearchButton from '../shared/components/UIElements/Search';
import Sortbutton from '../shared/components/UIElements/Sort';
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
    describe("test MainHeader",()=>{
    it("render header correctly",()=>{
        const header = shallow(<MainHeader>children</MainHeader>);
        expect(header.find("header").length).toBe(1);
    })
    })
    describe("test NavLinks",()=>{
        it("render NavLinks correctly",()=>{
            const links = shallow(<NavLinks/>);
            expect(links.find("ul").length).toBe(1);
        })
    

})
describe("test Avatar",()=>{
    it("render Avatar correctly",()=>{
        const avatar = shallow(<Avatar className="no" style="no" image="no" alt="no" width="no" width="no"/>);
        expect(avatar.find("img").length).toBe(1);
    })
})

describe("test Card",()=>{
    it("render Card correctly",()=>{
        let card = shallow(<Card className="no" style="no">children</Card>);
        expect(card.find("div").length).toBe(1);
    })
})
describe("test Filter",()=>{
    it("render filter correctly",()=>{
        let e = {"time":"no"};
        let filter = shallow(<Filter elements ={e} title="no"/>);
        expect(filter.find("tr").length).toBe(1);
    })
    
})
describe("test pagination",()=>{
    it("render pagination correctly",()=>{
        let page = shallow(<PaginationPage totalPost="2" postsPerPage="2" currntpage ="1" paginate="1" />)
        expect(page.find("span").length).toBe(1);
    })
    
})
describe("test search",()=>{
    it("render search correctly",()=>{
        let search = shallow(<SearchButton placeholder="no" />)
        expect(search.find("input").length).toBe(1);
    })
    
})
describe("test sort",()=>{
    it("render search correctly",()=>{
        let item=["no"];
        let sort = shallow(<Sortbutton items={item} sortby="no" />)
        expect(sort.find("DropdownButton").length).toBe(1);
    })
    
})

