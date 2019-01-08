import React from 'react';
import AnswerCard from './AnswerCard.js';
import { shallow } from 'enzyme';

const currentAnswerToDisplay = { "id": 1,
    "categories":"Context",
    "question": "What is the default value of the THIS keyword?",
    "answer1": "The DOM Tree",
    "answer2": "The Global Window Object", 
    "answer3": "The Call Stack",
    "correctAnswer": "The Global Window Object",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  }

const mockPutInLocalStorage = jest.fn();

describe('AnswerCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AnswerCard questionInfo={currentAnswerToDisplay}
                  putInLocalStorage={mockPutInLocalStorage} />
      )
  })

  it('should match the snapshot with all data passed down', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should register a click when STORE ANSWER FOR LATER is clicked', () => {
    wrapper.find('.answer-card--button').simulate('click')
    expect(mockPutInLocalStorage).toBeCalled()
  })
})