import React from 'react';
import IncorrectAnswerPopup from './IncorrectAnswerPopup.js';
import { shallow } from 'enzyme';

const mockReturnToDisplayAll = jest.fn();

describe('IncorrectAnswerPopup', () =>{
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <IncorrectAnswerPopup returnToDisplayAll={mockReturnToDisplayAll} />
      )
  })

  it('should match the snapshot with all correct data passed down', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register a click when RETURN TO QUESTION LIST has been clicked', () => {
    wrapper.find('.popup--button').simulate('click')
    expect(mockReturnToDisplayAll).toBeCalled()
  })
})