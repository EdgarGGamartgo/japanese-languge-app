import * as React from "react";
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { QuestionsBoard } from '../QuestionsBoards';


test('examples of some things', async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(<QuestionsBoard />)
  const famousProgrammerInHistory = 'Ada Lovelace'

  const input = getByTestId('input')
  fireEvent.changeText(input, famousProgrammerInHistory)

  const button = getByText('Print Username')
  fireEvent.press(button)

  await waitFor(() => expect(queryByTestId('printed-username')).toBeTruthy())

  expect(getByTestId('printed-username').props.children).toBe(
    1
  )
  expect(toJSON()).toMatchSnapshot()
})