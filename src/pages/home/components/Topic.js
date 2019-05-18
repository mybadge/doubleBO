import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
import { Link } from 'react-router-dom';

class Topic extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<TopicWrapper>
				{
					list.map((item, index)=>{
						return (
						<Link key={index} to={item.get('linkUrl')}>
							<TopicItem>
								<img alt='' className='topic-pic' src={item.get('imgUrl')} />
								<dd>{item.get('title')}</dd>
							</TopicItem>
						</Link>)
					})
				}
				
				{/* <Link to='/news'><TopicItem>
					<img alt=''
						className='topic-pic' src={news_02} />
					<dd>行业新闻</dd>
				</TopicItem></Link>
				<Link to='/about'><TopicItem>
					<img alt=''
						className='topic-pic' src={news_03} />
					<dd>公司公告</dd>
				</TopicItem></Link> */}
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);