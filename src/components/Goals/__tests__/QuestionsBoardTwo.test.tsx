import * as React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import { QuestionsBoardTwo } from './../QuestionsBoardTwo';
 
test('form submits two answers', () => {
  const allQuestions = ['q1', 'q2'];
  const mockFn = jest.fn();
 
  const { getAllByA11yLabel, getByText } = render(
    <QuestionsBoardTwo questions={allQuestions} onSubmit={mockFn} />
  );
 
  const answerInputs = getAllByA11yLabel('answer input');
 
  fireEvent.changeText(answerInputs[0], 'a1');
  fireEvent.changeText(answerInputs[1], 'a2');
  fireEvent.press(getByText('Submit'));
 
  expect(mockFn).toBeCalledWith({
    '1': { q: 'q1', a: 'a1' },
    '2': { q: 'q2', a: 'a2' },
  });
});