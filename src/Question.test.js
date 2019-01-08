import React from 'react';
import Question from './Question.js';
import { shallow } from 'enzyme';

const mockQuestion = { "id": 1,
    "categories":"Context",
    "question": "What is the default value of the THIS keyword?",
    "answer1": "The DOM Tree",
    "answer2": "The Global Window Object", 
    "answer3": "The Call Stack",
    "correctAnswer": "The Global Window Object",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  }

const mockVerifyAnswer = jest.fn()

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Question questionInfo={mockQuestion}
                verifyAnswer={mockVerifyAnswer}
                key={mockQuestion.id} />
      )
  })

  it('should match the snapshot with all the data passed down', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register a click when any H3 element is clicked', () => {
    wrapper.find('.answer-select-one', 'answer-select-two', 'answer-select-three', () => {
      expect(mockVerifyAnswer).toBeCalled()
    })

 
  })
})