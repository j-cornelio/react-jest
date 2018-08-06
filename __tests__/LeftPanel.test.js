import React from 'react';
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import jsdom from 'jsdom'
import LeftPanel from '../src/components/LeftPanel'

const {JSDOM} = jsdom
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

configure({ adapter: new Adapter() });

import MyFirstComponent from '../src/components/MyFirstComponent';

const wrapper = mount(<LeftPanel />);
let container;

describe("Test panel exists", () => {

  describe("render <div>", () => {
    beforeEach(() => {
       container = wrapper.find("div");
    });
    
    it("should have a <div>", () => {
       expect(container).toHaveLength(7);
    });
  });
})