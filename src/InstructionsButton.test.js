import React from 'react';
import InstructionsButton from './InstructionsButton.js';
import { shallow } from 'enzyme';

const mockDisplayInstructions = jest.fn();

describe('InstructionsButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <InstructionsButton displayInstructions={mockDisplayInstructions} />
      )
  })

  it('should match the snapshot with all the correct data passed to the InstructionsButton', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register a click when CLICK FOR INSTRUCTIONS button has been triggered', () => {
    wrapper.find('.instructions-button').simulate('click')
    expect(mockDisplayInstructions).toBeCalled();
  })

})