import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs'
Enzyme.configure({adapter: new Adapter()})


describe("When AboutUs renders", () => {
    it("displays a heading", () => {
        const us = shallow(<AboutUs />)
        const usAbout = us.find("h6").text()
        expect(usAbout).toEqual("LEARN Academy")
    })
})