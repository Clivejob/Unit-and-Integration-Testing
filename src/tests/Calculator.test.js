import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add one number to another', () => {
    const clear = container.getByTestId('clear')
    const total = container.getByTestId('running-total')
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator-add')
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(clear);
    fireEvent.click(button4);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equals)
    expect(total.textContent).toEqual('5');
  })

  it('should be able to minus one number from another', () => {
    const clear = container.getByTestId('clear')
    const total = container.getByTestId('running-total')
    const button7 = container.getByTestId('number7')
    const button4 = container.getByTestId('number4')
    const subtract = container.getByTestId('operator-subtract')
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(clear);
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(total.textContent).toEqual('3')
  })

  it('should be able to multiply one number by another', () => {
    const total = container.getByTestId('running-total')
    const clear = container.getByTestId('clear')
    const equals = container.getByTestId('operator-equals')
    const multiply = container.getByTestId('operator-multiply')
    const button3 = container.getByTestId('number3')
    const button5 = container.getByTestId('number5')
    fireEvent.click(clear);
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(total.textContent).toEqual('15')
  })

  it('should be able to divide one number by another', () => {
    const total = container.getByTestId('running-total')
    const clear = container.getByTestId('clear')
    const equals = container.getByTestId('operator-equals')
    const divide = container.getByTestId('operator-divide')
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7')
    fireEvent.click(clear);
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(total.textContent).toEqual('3')
  })

  it('should be able to concatenate', () => {
    const total = container.getByTestId('running-total')
    const clear = container.getByTestId('clear')
    const button1 = container.getByTestId('number1')
    fireEvent.click(clear);
    fireEvent.click(button1);
    fireEvent.click(button1);
    expect(total.textContent).toEqual('11')
  })

  it('should be able to chain multiple operations', () => {
    const total = container.getByTestId('running-total')
    const clear = container.getByTestId('clear')
    const button1 = container.getByTestId('number1')
    const add = container.getByTestId('operator-add')
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(clear);
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(equals);
    expect(total.textContent).toEqual('3')
  })

  it('should be able to clear without affection the on-going calculation', () => {
    const total = container.getByTestId('running-total')
    const clear = container.getByTestId('clear')
    const button1 = container.getByTestId('number1')
    const add = container.getByTestId('operator-add')
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(clear);
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(clear);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(equals);
    expect(total.textContent).toEqual('2')
  })
})

