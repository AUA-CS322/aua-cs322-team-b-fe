import React from 'react';
import { shallow, configure } from 'enzyme';
import SignInForm from './SignInForm'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('SignInForm redner', () => {

	it('renders without error', () => {
		const wrapper = shallow(<SignInForm />);
		expect(wrapper.length).toEqual(1);
	});		
});