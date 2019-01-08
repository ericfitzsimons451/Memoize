import React from 'react';
import Instructions from './Instructions.js'
import { shallow } from 'enzyme';

const mockReturnToMainDisplay = jest.fn();


describe('Instructions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Instructions returnToMainDisplay={mockReturnToMainDisplay} />
      )
  })

  it('should match the snapshot with all data correctly passed to the Instructions', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register a click when the LETs Go! button is pressed', () => {
    wrapper.find('.exit-instructions-button').simulate('click')
    expect(mockReturnToMainDisplay).toBeCalled()
  })
})