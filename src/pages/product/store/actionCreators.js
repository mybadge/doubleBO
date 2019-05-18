import axios from 'axios';
import * as constants from './constants';


const getProductData = (result) => ({
	type: constants.GET_PRODUCT_DATA,
	list: result.list
});


export const getProductInfo = () => {
	return (dispatch) => {
		axios.get('/api/productList.json').then((res) => {
			const result = res.data.data;
			dispatch(getProductData(result));
		});
	}
}
