import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const mockObject = { "id": 1,
    "categories":"Context",
    "question": "What is the default value of the THIS keyword?",
    "answer1": "The DOM Tree",
    "answer2": "The Global Window Object", 
    "answer3": "The Call Stack",
    "correctAnswer": "The Global Window Object",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  }

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.setItem('correctAnswers', [true, true, true])
    wrapper = shallow(
      <App />
      )
  });

  afterEach(() => {
    localStorage.clear()
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      data: null,
      isLoading: true,
      showInstructions: false,
      correctlyAnsweredQuestions: JSON.parse(localStorage.getItem('correctAnswers'))
    })
  })

  it('should update state when DISPLAY INSTRUCTIONS is clicked', () => {
    expect(wrapper.state()).toEqual({
      data: null,
      isLoading: true,
      showInstructions: false,
      correctlyAnsweredQuestions: JSON.parse(localStorage.getItem('correctAnswers'))
    })
    wrapper.instance().displayInstructions()
    expect(wrapper.state()).toEqual({
      data: null,
      isLoading: true,
      showInstructions: true,
      correctlyAnsweredQuestions: JSON.parse(localStorage.getItem('correctAnswers'))
    })
  })

  it('should update state when RETURN TO MAIN DISPLAY is clicked', () => {
    wrapper.instance().displayInstructions()
    expect(wrapper.state()).toEqual({
      data: null,
      isLoading: true,
      showInstructions: true,
      correctlyAnsweredQuestions: JSON.parse(localStorage.getItem('correctAnswers'))
    })
    wrapper.instance().returnToMainDisplay()
    expect(wrapper.state()).toEqual({
      data: null,
      isLoading: true,
      showInstructions: false,
      correctlyAnsweredQuestions: JSON.parse(localStorage.getItem('correctAnswers'))
    })
  })

  it('should set answered questions in state', () => {
    expect(wrapper.state()).toEqual({
      correctlyAnsweredQuestions: null
    })
    wrapper.instance().setAnsweredQuestionsInState(mockObject)
    expect(wrapper.state()).toEqual({
      correctlyAnsweredQuestions: mockObject
    })
  })

  // it('should show all questions and clear local storage', () => {
  //   let correct = [true, true, true]
  //   wrapper.setState
  // })
})