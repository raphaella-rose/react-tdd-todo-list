/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from '@testing-library/react';
import TodoList from "./TodoList";

describe('TodoList Component', () => {
  it('should render', () => {
    const {getByTestId} = render(<TodoList />);
    expect(getByTestId('TodoList')).toBeInTheDocument();
  })
})
