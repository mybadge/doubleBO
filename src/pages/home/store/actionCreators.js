import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList,
	cycleList: result.cycleList,
	newsList: result.newsList
});

const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

const getHrListData = (list) => ({
	type: constants.GET_HR_LIST,
	hrList: fromJS(list),
})

const handleNewsListData = (result) => ({
	type: constants.GET_NEWS,
	newsList: result.newsList,
	//patentList: result.patentList
})

const handlePatentData=(result)=>({
	type: constants.GET_NEWS_PATENTS,
	patentList: result.list
})


export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		});
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	}
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})

export const getHrList = () => {
	return (dispatch) => {
		axios.get('/api/hr.json').then((res) => {
			const result = res.data.data;
			dispatch(getHrListData(result));
		})
	}
}

export const getNewsList = () => {
	return (dispatch) => {
		axios.get('/api/newsList.json').then((res) => {
			const result = res.data.data;
			dispatch(handleNewsListData(result));
		})
	}
}

export const getPatentList = () => {
	return (dispatch) => {
		axios.get('/api/patent.json').then((res) => {
			const result = res.data.data;
			dispatch(handlePatentData(result));
		})
	}
}