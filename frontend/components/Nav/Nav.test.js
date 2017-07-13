import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from './Nav';

test('Nav component should render as expected', () => {
	const component = shallow(<Nav />);
	expect(component).toMatchSnapshot();
});

//enzyme-to-json
//identity-obj-proxy
//package.json to "jest": "moduleNameMapper" : {"\\.css$": "identity-obj-proxy"}