import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import Topic from './components/Topic';

import { 
	List,
	Button,
	Carousel,
	Typography 
} from 'antd';

import {
	BackTop, 
	HomeWrapper,
	HomeLeft,
	HomeProductRight,
	ProductCenter,
	TechnologyWrapper,
	TechonlogyCenter,
	NewsListWrapper
} from './style';

const { Title, Paragraph } = Typography;

class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0, 0);
	}

	render() {
		const {cycleList, newsList} = this.props;
		return (
			<HomeWrapper>
				<HomeLeft>
					<Carousel autoplay>
						{
							cycleList.map((item, index) => {
								return (
									<Link key={index} to={'/detail/' + item.get('id')}>
										<div><img className='banner-img' alt='alt' src={ item.get('imgUrl') } /></div>
									</Link>
								);
							})
						}
					</Carousel>
					
					<div className='center'>绿色生态农业  携手健康生活
						<Paragraph style={{'color': '#ccc','fontSize': 15 }}>Green ecological planting and healthy living</Paragraph>
					</div>
					<Topic />
					<div>
						<img className='img_left' alt='' src='/assets/img_left.png' />
						<HomeProductRight>
							<div style={{'paddingTop': '10px','margin': '0px 10px 10px 10px'}}>
								<Title level={2} style={{'color': 'white'}}>产品中心</Title>
								<Paragraph style={{'margin': '0px 10px 10px 0px', 'color': 'white'}}>Tianjin Baodi agricultural development<br/>Limited conpany<br /><br />天津双博农业科技有限公司成立于2015年5月6日，初期注册资本2000万元人民币，公司注册地为天津宝坻节能环保工业区海关大厦903室，营业执照注册号：91120224328588995X</Paragraph>
								<Button href='/product' target='_blank' >了解更多>></Button>
							</div>
						</HomeProductRight>
					</div>
					<ProductCenter>
						<h2>产品中心/ <p>Product center</p></h2>
						<img className='left' alt='' src='/assets/product_01.jpg' />
						<div>
							<img className='right1' alt='' src='/assets/product_02.jpg' />
							<img className='right2' alt='' src='/assets/product_03.jpg' />
							<img className='right3' alt='' src='/assets/product_04.jpg' />
							<img className='right4' alt='' src='/assets/product_05.jpg' />
						</div>
						
					</ProductCenter>

					<TechnologyWrapper>
						<TechonlogyCenter>
							<h2>技术中心/<p>Technology center</p></h2>
							<dl className='content'>
								<dt>
									<img className='imgLeft' alt='' src='/assets/product_06.jpg'/>
									<div className='divRight'>
										<Title level={4}>天麻栽培技术</Title>
											<Paragraph>
												Tianjin Baodi agricultural development
												<br/>Limited conpany
												<br/>公司介绍公司介绍,公司介绍公司介绍公司介绍公司介绍公司
											</Paragraph>

										<Button style={{'marginLeft':'0px'}} href='/product' target='_blank' >了解详情>></Button>
									</div>
								</dt>
								<dt>
									<div className='divLeft'>
										<Title level={4}>苹果栽培技术</Title>
										<Paragraph>
												Tianjin Baodi agricultural development
												<br/>Limited conpany
										</Paragraph>
										<Button style={{'marginLeft':'0px'}}  href='http://www.baidu.com' target='_blank' >了解详情>></Button>
									</div>
									<img className='imgRight' alt='' src='/assets/product_07.jpg'/>
								</dt>
							</dl>
						</TechonlogyCenter>
					</TechnologyWrapper>
					
					<NewsListWrapper>
						<h2>最新动态/<p>Least news</p></h2>
						<List
							bordered
							dataSource={newsList}
							renderItem={item => (<List.Item><Typography.Text>[{item.get('time')}]</Typography.Text> {item.get('title')}</List.Item>)}
							/>
						
					</NewsListWrapper>

					{/* <List /> */}
				</HomeLeft>
				
				{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}

}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll']),
	cycleList: state.getIn(['home', 'cycleList']),
	newsList: state.getIn(['home', 'newsList']),
	topicList: state.getIn(['home', 'topicList']),
})

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});

export default connect(mapState, mapDispatch)(Home);
