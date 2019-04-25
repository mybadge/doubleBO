import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

import news_01 from '../../../statics/news_01.jpg'
import news_02 from '../../../statics/news_02.jpg'
import news_03 from '../../../statics/news_03.jpg'

class Topic extends PureComponent {
	render() {
		//const { list } = this.props;
		return (
			<TopicWrapper>
				<TopicItem>
					<img alt=''
						className='topic-pic' src={news_01} />
					<dd>公司新闻</dd>
				</TopicItem>
				<TopicItem>
					<img alt=''
						className='topic-pic' src={news_02} />
					<dd>行业新闻</dd>
				</TopicItem>
				<TopicItem>
					<img alt=''
						className='topic-pic' src={news_03} />
					<dd>公司公告</dd>
				</TopicItem>
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	// list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);