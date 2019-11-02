import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false,
	cycleList: [],
	topicList:[],
	newsList:[],
	hrList: [],
	patentList: [],
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList),
		cycleList: fromJS(action.cycleList),
		newsList: fromJS(action.newsList),
		patentList: fromJS(action.patentList)
	});
};

const addArticleList = (state, action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'articlePage': action.nextPage
	});
};

const changeNewsData = (state, action) => {
	return state.merge({
		newsList: fromJS(action.newsList),
		patentList: fromJS(action.patentList)
	})
}
const changePatentData=(state, action) =>{
	return state.merge({
		patentList: fromJS(action.patentList)
	})
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
		case constants.GET_HR_LIST:
			return state.set('hrList', action.hrList);
		case constants.GET_NEWS:
			return changeNewsData(state, action)
		case constants.GET_NEWS_PATENTS:
			return changePatentData(state, action)
		default:
			return state;
	}
}