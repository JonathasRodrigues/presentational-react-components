import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Component from '../../src/Main';

describe('Component Hello', () => {
   it('should have h1 to display the Hello', () => {
       const wrapper = shallow(<Component name='First' />);
       expect(wrapper.find('h1')).to.have.length(1);
   });

    it('should have props for name', () => {
        const wrapper = shallow(<Component name='First' />);
        expect(wrapper.props().name).to.be.defined;
    });

    it('should create a correct DOM structure', () => {
        const wrapper = shallow(<Component name='First' />);
        const componentMock = shallow(<h1>My First Presentational React Component!</h1>);
        expect(wrapper.html()).to.be.equal(componentMock.html());
    });
});
