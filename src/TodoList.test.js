/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from '@testing-library/react';
import TodoList from "./TodoList";


describe('TodoList Component', () => {
  it('should render', () => {
    const {getByTestId} = render(<TodoList />);
    expect(getByTestId('TodoList')).toBeInTheDocument();
  })

  it('should have a title', () => {
    const {getByText} = render(<TodoList />);
    expect(getByText('Todo List')).toBeInTheDocument();
  })

  it('should have a form', () => {
    const {getByPlaceholderText} = render(<TodoList />);
    expect(getByPlaceholderText('Enter a task')).toBeInTheDocument();
  })

  it('should have a submit button for the form', () => {
    const {getByText} = render(<TodoList />);
    expect(getByText('Submit')).toBeInTheDocument();
  })
})
