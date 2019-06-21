import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0px auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 960px;
	.banner-img {
		width: 960px;
		height: 220px;
	}
	.center {
		padding-top: 30px;
		text-align: center;
		color: green;
		font-size: 35px;
	}
	.img_left {
		width: 50%;
		height: 250px;
	}
`;

export const HomeProductRight = styled.div`
	background: #313F4B;
	color: white;
	width: 50%;
	height: 250px;
	display: block;
	float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 40px 0 30px 0;
	
	border-bottom: 1px solid #dcdcdc;
	display: flex;
	flex-direction: row;
	justfy-content: center;
	
`;

export const TopicItem = styled.dl`

	margin-left: 60px;
	margin-bottom: 20px;
	padding-left: 100px;
	font-size: 14px;
	color: #000;
	text-align: center;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: center;
	}
`;

export const ProductCenter = styled.div`
	margin: 30px auto 43px auto;
	background: white;
	width: 600px;
	height: 280px;	
	align: center;
	padding-top: 30px;
	.left {
		height: 250px;
		float: left;
		padding-right: 10px; 
	}

	.right1 {
		width: 185px;
		height: 120px;
		margin: 0px 5px 5px px;
	}
	.right2 {
		float: right;
		width: 185px;
		height: 120px;
		margin: 0px 0px 0px 0px;
	}
	.right3 {
		width: 185px;
		height: 123px;
		margin: 5px 0px 0px 0px;
		align: bottom;
	}
	.right4 {
		float: right;
		width: 185px;
		height: 123px;
		margin: 5px 0px 0px 0px;
		align: bottom;
	}
	h2 {
		display: block;
		color: red;
		padding-bottom: 10px;
		p {
			color: #ccc;
			font-size: 10px;
		}
	}
`;

export const TechnologyWrapper = styled.div`
	width: 960px;
	height: 650px;
	background-image: url('/assets/technology_bg.jpg');
	background-size: 1280px 580px;
`

export const TechonlogyCenter = styled.div`
	h2 {
		display: block;
		color: red;
		padding-top:90px;
		padding-bottom: 10px;
		p {
			color: #ccc;
			font-size: 10px;
		}
	}
	h3 {
		font-size: 20px;
		margin: 10px 0px 10px 0px;
	}
	h5 {
		font-size: 12px;
		margin: 10px 0px 10px 0px;
	}

    margin: 0px auto;
	width: 600px;
	height: 600px;
	.content {
		margin-top: 40px;
		width: 100%;
		height: 300px;
		display: flex;
		flex-direction: row;
		justfy-content: center;
	}
	.imgLeft {
		width: 300px;
		height: 140px;
		
	}
	.divLeft {
		width: 300px;
		height: 140px;
		padding-top: 10px;
		color: white;
	}
	.divRight {
		width: 300px;
		height: 140px;
		padding-top: 10px;
		padding-left: 10px;
		color: white;
		margin-left: 10px;
	}
	
	.imgRight {
		display: block;
		width: 300px;
		height: 140px;
	}
`

export const NewsListWrapper = styled.div`
	h2 {
		display: block;
		color: red;
		padding-bottom: 10px;
		p {
			color: #ccc;
			font-size: 10px;
		}
	}
	width: 600px;
	height: auto;
	margin: -100px auto 20px auto;

`

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 80px;
	bottom: 80px;
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	img {
		width: 20;
		height: 20;
	}
`;

export const AboutBg = styled.div`
	margin: 20px 0px;
	background-image: url('/assets/about_bg.jpg');
	background-size: 1280px 680px;
`;