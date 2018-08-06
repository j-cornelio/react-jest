import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import jsdom from 'jsdom'
import Todo from '../src/components/Todo'

const {JSDOM} = jsdom
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

configure({ adapter: new Adapter() });

test('TodoComponent renders the text inside it', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const wrapper = mount(
    <Todo todo={todo} />
  );
  const p = wrapper.find('.toggle-todo');

  expect(p.text()).toBe('Buy Milk');
});
