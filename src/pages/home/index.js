import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as detailActionCreators } from '../detail/store'
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

	// constructor(props) {
	// 	super(props);
	// }

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
									//  <Link key={index} to={'/detail/' + item.get('id')}>
									<Link key={index} to='productInfo'>
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
								<Paragraph style={{'margin': '0px 10px 10px 0px', 'color': 'white'}}>Tianjin Baodi agricultural development<br/>Limited conpany<br /><br />“沃•双博”生态沼液肥系列产品是由天津双博农业科技有限公司与北京农林科学院共同研发、由中粮肉食（天津）有限公司和天津双博农业科技有限公司合作生产的新一代农业生产用肥</Paragraph>
								<Link to='/product'><Button >了解更多>></Button></Link> 
							</div>
						</HomeProductRight>
					</div>
					<ProductCenter>
						<h2>产品中心/ <p>Product center</p></h2>
						<div style={{flexDirection:'column'}}>
							<img className='left' alt='' src='/assets/product_01.jpg' />
							<div style={{flexDirection:'column', flexWrap:'wrap'}}>
								<img className='right1' alt='' src='/assets/product_02.jpg' />
								<img className='right2' alt='' src='/assets/product_03.jpg' />
								<img className='right3' alt='' src='/assets/product_04.jpg' />
								<img className='right4' alt='' src='/assets/product_05.jpg' />
							</div>
						</div>
					
						
					</ProductCenter>

					<TechnologyWrapper>
						<TechonlogyCenter>
							<h2>技术中心/<p>Technology center</p></h2>
							<dl className='content'>
								<dt>
									<img className='imgLeft' alt='' src='/assets/product_06.jpg'/>
									<div className='divRight'>
										<Title style={{color:'white'}} level={4}>生态沼液肥（瓜果蔬菜类专用）</Title>
										<Paragraph style={{color:'white'}}>
											我司以科技服务农业，以质量求生存，以信誉求发展的宗旨，为我国的农业可持续发展和绿色有机食品基地的建设做出应有的贡献
										</Paragraph>
										
									</div>
								</dt>
								<dt>
									<div className='divLeft'>
										<Title style={{color:'white'}} level={4}>生态沼液肥（叶菜类专用）</Title>
											<Paragraph style={{color:'white'}}>
												我司与北京农林科学院、中国农业大学、天津市一轻局微生物研究所、三河市职教中心等科研所建立了密切的合作关系
											</Paragraph>
									</div>
									<img className='imgRight' alt='' src='/assets/product_07.jpg'/>
								</dt>
							</dl>
						</TechonlogyCenter>
					</TechnologyWrapper>
					
					<NewsListWrapper>
						<h2>产品标准/<p>Product standard</p></h2>
						<List
							bordered
							dataSource={newsList}
							renderItem={item => (
									<Link to={{ pathname : '/pdfViewer' , state : {fileName: item.get('linlUrl')}}}>
										<List.Item>{item.get('title')}</List.Item>
									</Link>
									)
								}
							/>
						
					</NewsListWrapper>

					{/* <List /> */}
				</HomeLeft>
				
				{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop}><img src='/assets/home_top.png' alt='img' /></BackTop> : null}
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
	},
	getDetail() {
		dispatch(detailActionCreators.getDetail(1));
	}
});

export default connect(mapState, mapDispatch)(Home);
