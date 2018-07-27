import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Search from '../components/Search';
import citiesList from '../utils/citiesList';
import { PrefixTrie } from 'complete-me';

describe('Search', () => {
	let wrapper;
	let setLocation = jest.fn();
	let notFoundError = false;

	beforeEach(() => {
		wrapper = shallow(
			<Search setLocation={setLocation} notFoundError={notFoundError} />
		);
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Search />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should have an initial state', () => {
		const trie = new PrefixTrie();
		trie.populate(citiesList.data);

		expect(wrapper.state().searchValue).toEqual('');
		expect(wrapper.state().prefixTrie).toEqual(trie);
		expect(wrapper.state().autoCompleteResults).toEqual([]);
		expect(wrapper.state().cursor).toEqual(-1);
	});

	it('should render a form with an input and a button', () => {
		expect(wrapper.find('.search-form').exists()).toEqual(true);
		expect(wrapper.find('.search-input').exists()).toEqual(true);
		expect(wrapper.find('input[type="submit"]').exists()).toEqual(true);
	});

	it('it should bind state to input value (handleInputChange)', () => {
		wrapper
			.find('.search-input')
			.simulate('change', { target: { value: 'Denver' } });

		expect(wrapper.state().searchValue).toEqual('Denver');
	});

	it('should call setLocation method in App.js when form is submitted', () => {
		let mockFn = jest.fn();

		wrapper = mount(
			<Search setLocation={mockFn} notFoundError={notFoundError} />
		);

		wrapper
			.find('.search-input')
			.simulate('change', { target: { value: 'Denver' } });

		wrapper.find('.search-form').simulate('submit');

		expect(wrapper.props().setLocation).toHaveBeenCalled();
		expect(wrapper.props().setLocation).toHaveBeenCalledWith('Denver');
	});

	it('should not add any suggestions if the input length is less than 1', () => {});

	it('should generate a list of suggestions when typing', () => {
		let mockFn = jest.fn();

		wrapper = mount(
			<Search setLocation={mockFn} notFoundError={notFoundError} />
		);

		wrapper
			.find('.search-input')
			.simulate('change', { target: { value: 'Den' } });

		expect(wrapper.state().autoCompleteResults).toEqual([
			'Denver, co',
			'Denton, tx'
		]);
	});

	// it('should call setLocation method when autocomplete item is arrowed down to and entered', () => {
	// 	let mockFn = jest.fn();
	// 	wrapper.instance().handleInputKeyDown = mockFn;

	// 	wrapper = mount(
	// 		<Search setLocation={mockFn} notFoundError={notFoundError} />
	// 	);

	// 	wrapper.find('.search-input').simulate('click');

	// 	wrapper
	// 		.find('.search-input')
	// 		.simulate('change', { target: { value: 'De' } });

	// 	wrapper.simulate('keydown', { keyCode: 40 });
	// 	wrapper.simulate('keydown', { keyCode: 40 });

	// 	// wrapper.simulate('keydown', { keyCode: 13 });

	// 	console.log(wrapper.state());

	// 	// expect(wrapper.instance().handleInputKeyDown).toHaveBeenCalled();
	// });

	it('clear input field after submit', () => {
		wrapper
			.find('.search-input')
			.simulate('change', { target: { value: 'Denver' } });

		wrapper.instance().resetSearch();

		expect(wrapper.state().searchValue).toEqual('');
	});
});
