import React from 'react';
import Display from './Display.js';
import { shallow } from 'enzyme';

// const mockPutInLocalStorage = jest.fn();
// const mockVerifyAnswer = jest.fn();
// const mockReturnToDisplayAll = jest.fn();
const mockSetAnsweredQuestionsInState = jest.fn();
const mockAnswerClick = {target: {parentElement: {id: 1}}}

const mockId = 1;
const mockQuestionBank = [{ "id": 1,
    "categories":"Context",
    "question": "What is the default value of the THIS keyword?",
    "answer1": "The DOM Tree",
    "answer2": "The Global Window Object", 
    "answer3": "The Call Stack",
    "correctAnswer": "The Global Window Object",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  }]

describe('Display', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Display questionBank={mockQuestionBank}
               key={mockId} />

    )
  })

  it('should match the snapshot with all data passed down', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      showAllQuestions: true,
      displayAnswer: false,
      currentAnswerToDisplay: null,
      showIncorrectAnswerPopup: false
    })
  })

  it('should verify if an answer is false', () => {
    expect(wrapper.state()).toEqual({
      showAllQuestions: true,
      displayAnswer: false,
      currentAnswerToDisplay: null,
      showIncorrectAnswerPopup: false
    })
    wrapper.instance().verifyAnswer(mockAnswerClick)
    expect(wrapper.state()).toEqual({
      showAllQuestions: false,
      displayAnswer: false,
      currentAnswerToDisplay: null,
      showIncorrectAnswerPopup: true
    })
  })

  // it('should verify if an answer is true', () => {
  //   expect(wrapper.state()).toEqual({
  //     showAllQuestions: true,
  //     displayAnswer: false,
  //     currentAnswerToDisplay: null,
  //     showIncorrectAnswerPopup: false
  //   })

  //    I don't think that I'm getting to line 73.  Ideas? 


  //   wrapper.instance().verifyAnswer(mockAnswerClick)
  //   expect(wrapper.state()).toEqual({
  //     showAllQuestions: false,
  //     displayAnswer: true,
  //     currentAnswerToDisplay: mockQuestionBank,
  //     showIncorrectAnswerPopup: false
  //   })
  // })

  it('should be able to display all questions after returning from an incorrect answer', () => {

    /* THIS SEEMS SOUND BUT IT BLEW UP THE TEST.  WHAT AM I MISSING?


    // expect(wrapper.state()).toEqual({
    //   showAllQuestions: false,
    //   displayAnswer: false,
    //   currentAnswerToDisplay: null,
    //   showIncorrectAnswerPopup: true,
    // })
    */

    wrapper.instance().returnToDisplayAll()
    expect(wrapper.state()).toEqual({
      displayAnswer: false, currentAnswerToDisplay: null, showAllQuestions: true, showIncorrectAnswerPopup: false
    })
  })

  it('should put items in local storage when an answer is correct', () => {
    expect(localStorage.length).toEqual(0)
    wrapper.instance().putInLocalStorage()
    expect(localStorage.length).toEqual(1)
  })
})