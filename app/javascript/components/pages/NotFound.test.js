import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'
Enzyme.configure({adapter: new Adapter()})


describe("When NotFound renders", () => {
    it("displays a heading", () => {
        const nothing = shallow(<NotFound />)
        const nothingHeading = nothing.find("h1").text()
        expect(nothingHeading).toEqual("Oooops.... Page Not Found")
    })
})