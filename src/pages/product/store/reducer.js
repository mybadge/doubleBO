import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	list: [],
	articlePage: 1,
	showScroll: false,
});

const getProductData = (state, action) => {
	return state.merge({
		list: fromJS(action.list)
	});
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.GET_PRODUCT_DATA:
			return getProductData(state, action);
		
		default:
			return state;
	}
}