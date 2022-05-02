import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BurrowCards from './BurrowCards'
Enzyme.configure({adapter: new Adapter()})


describe("When BurrowCards renders", () => {
  it("displays a heading", () => {
      const cards = shallow(<BurrowCards />)
      const cardsHeading = cards.find("Header")
      expect(cards.length).toEqual(1)
  })
})