import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
// import Recommend from './components/Recommend';
// import Writer from './components/Writer';
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
	BackTop, 
	HomeWrapper,
	HomeLeft,
	HomeProductRight,
	Button,
	ProductCenter,
	TechnologyWrapper,
	TechonlogyCenter,
	NewsList
} from './style';

class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt='' src={ top_img } />
					<div className='center'>绿色生态农业  携手健康生活
						<br />
						<p>Green ecological planting and healthy living</p>
					</div>
					<Topic />
					<div>
						<img className='img_left' alt='' src={ img_left } />
						<HomeProductRight>
							<h3>产品中心</h3>
							<h5>Tianjin Baodi agricultural development<br/>Limited conpany</h5>

							<h5>公司介绍公司介绍,公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</h5>

							<Button href='http://www.baidu.com' target='_blank' >了解更多>></Button>
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
										<h3>天麻栽培技术</h3>
										<h5>Tianjin Baodi agricultural development<br/>Limited conpany</h5>

										<h5>公司介绍公司介绍,公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</h5>

										<Button style={{'margin-left':'0px'}} href='http://www.baidu.com' target='_blank' >了解详情>></Button>
									</div>
								</dt>
								<dt>
									<div className='divLeft'>
										<h3>苹果栽培技术</h3>
										<h5>Tianjin Baodi agricultural development</h5>

										<h5>公司介绍公司介绍,公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</h5>
										<Button style={{'margin-left':'0px'}}  href='http://www.baidu.com' target='_blank' >了解详情>></Button>
									</div>
									<img className='imgRight' alt='' src={product_07}/>
								</dt>
							</dl>
						</TechonlogyCenter>
					</TechnologyWrapper>
					
					<NewsList>
						<h2>最新动态/<p>Least news</p></h2>
					</NewsList>

					<List />
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
