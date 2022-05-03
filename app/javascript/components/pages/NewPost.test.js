import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NewPost from "./NewPost"
Enzyme.configure({adapter: new Adapter()})


describe("When NewPost renders", () => {
    it("displays a heading", () => {
        const newpost = shallow(<NewPost />)
        const postnew = newpost.find("h1").text()
        expect(postnew).toEqual("Add a new Post!")
    })
})