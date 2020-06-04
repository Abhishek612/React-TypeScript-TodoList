import React from 'react';
// import { render } from '@testing-library/react';
import { mount,shallow } from 'enzyme';
import { TodoListItem } from './TodoListItem';
import { AddTodoItem } from './AddTodoItem' 

const addTodo = (list:any, item:any) => [item, ...list]

const toggleComplete = jest.fn()
const handleChange = jest.fn()
const addTodofunc = jest.fn()

test('TodoComponent renders the list properly', () => {
  const todo = { text : 'qwerty', complete : true };
  const wrapper = shallow(
    <TodoListItem todo={todo} toggleComplete={toggleComplete}/>
  );
  const label = wrapper.find('label');
  expect(label.text()).toBe('qwerty');

});

test('toggle Funtion runs properly',() => {

  const todo = { text : 'done with covid-19', complete : false };
  const wrapper1 = mount(
    <TodoListItem todo={todo} toggleComplete={toggleComplete}/>
  );
  wrapper1.find('input[type="checkbox"]').simulate('change',{ target: { checked: true } });
  expect(toggleComplete).toBeCalledWith(todo);
  // expect(toggleComplete).toBeCalledWith(false);
  // console.log(wrapper1.debug())
  // const label = wrapper1.find('label');
  // const wrapper = mount(<AddTodoItem addTodo = {addTodofunc} />)
  // console.log(wrapper.debug())
  // const button = wrapper.find('button')
  // expect(button.text()).toBe('Add Todo')
  // button.simulate('click')
  // expect(addTodo).toBeCalledWith(1)


})

