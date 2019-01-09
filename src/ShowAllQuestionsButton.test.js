import React from 'react';
import ShowAllQuestionsButton from './ShowAllQuestionsButton.js';
import { shallow } from 'enzyme';

const mockShowAllQuestions = jest.fn();

describe('ShowAllQuestionsButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ShowAllQuestionsButton showAllQuestions={mockShowAllQuestions} />
      )
  })

  it('should match the snapshot with all data passed down', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should register a click when RESET ALL QUESTIONS is clicked', () => {
    wrapper.find('.show-all-questions-button').simulate('click')
    expect(mockShowAllQuestions).toBeCalled()
  })
})