import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import { actionCreators } from './store';

import top_img from '../../statics/top_img.jpg'
import img_left from '../../statics/img_left.png'
import product_01 from '../../statics/product_01.jpg'
import product_02 from '../../statics/product_02.jpg'
import product_03 from '../../statics/product_03.jpg'
import product_04 from '../../statics/product_04.jpg'
import product_05 from '../../statics/product_05.jpg'
import product_06 from '../../statics/product_06.jpg'
import product_07 from '../../statics/product_07.jpg'
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

const data = [
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.'
  ];
const { Title, Paragraph } = Typography;

class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<Carousel autoplay>
						<div><img className='banner-img' alt='' src={ top_img } /></div>
						<div><img className='banner-img' alt='' src={ top_img } /></div>
						<div><img className='banner-img' alt='' src={ top_img } /></div>
						<div><img className='banner-img' alt='' src={ top_img } /></div>
					</Carousel>
					
					<div className='center'>绿色生态农业  携手健康生活
						<Paragraph style={{'color': '#ccc','font-size': 15 }}>Green ecological planting and healthy living</Paragraph>
					</div>
					<Topic />
					<div>
						<img className='img_left' alt='' src={ img_left } />
						<HomeProductRight>
							<div style={{'padding-top': '10px','margin': '0px 10px 10px 10px'}}>
								<Title level={2} style={{'color': 'white'}}>产品中心</Title>
								<Paragraph style={{'margin': '0px 10px 10px 0px', 'color': 'white'}}>Tianjin Baodi agricultural development<br/>Limited conpany<br /><br />天津双博农业科技有限公司成立于2015年5月6日，初期注册资本2000万元人民币，公司注册地为天津宝坻节能环保工业区海关大厦903室，营业执照注册号：91120224328588995X</Paragraph>
								<Button href='/product' target='_blank' >了解更多>></Button>
							</div>
						</HomeProductRight>
					</div>
					<ProductCenter>
						<h2>产品中心/ <p>Product center</p></h2>
						<img className='left' alt='' src={product_01} />
						<div>
							<img className='right1' alt='' src={product_02} />
							<img className='right2' alt='' src={product_03} />
							<img className='right3' alt='' src={product_04} />
							<img className='right4' alt='' src={product_05} />
						</div>
						
					</ProductCenter>

					<TechnologyWrapper>
						<TechonlogyCenter>
							<h2>技术中心/<p>Technology center</p></h2>
							<dl className='content'>
								<dt>
									<img className='imgLeft' alt='' src={product_06}/>
									<div className='divRight'>
										<Title level={4}>天麻栽培技术</Title>
											<Paragraph>
												Tianjin Baodi agricultural development
												<br/>Limited conpany
												<br/>公司介绍公司介绍,公司介绍公司介绍公司介绍公司介绍公司
											</Paragraph>

										<Button style={{'margin-left':'0px'}} href='/product' target='_blank' >了解详情>></Button>
									</div>
								</dt>
								<dt>
									<div className='divLeft'>
										<Title level={4}>苹果栽培技术</Title>
										<Paragraph>
												Tianjin Baodi agricultural development
												<br/>Limited conpany
										</Paragraph>
										<Button style={{'margin-left':'0px'}}  href='http://www.baidu.com' target='_blank' >了解详情>></Button>
									</div>
									<img className='imgRight' alt='' src={product_07}/>
								</dt>
							</dl>
						</TechonlogyCenter>
					</TechnologyWrapper>
					
					<NewsListWrapper>
						<h2>最新动态/<p>Least news</p></h2>
						<List
							bordered
							dataSource={data}
							renderItem={item => (<List.Item><Typography.Text mark>[2019-05-02]</Typography.Text> {item}</List.Item>)}
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
	showScroll: state.getIn(['home', 'showScroll'])
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
