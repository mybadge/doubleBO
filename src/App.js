import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import BOHeader from './common/myheader';
import Home from './pages/home/HomeAble';
import ProductAble from './pages/product/ProductAble'
import News from './pages/NewsAble'
import Hr from './pages/HrAble'
import About from './pages/AboutAble'
import Detail from './pages/detail/loadable.js';
import MyPdfViewerAble from './pages/home/MyPdfViewerAble';
import ProductInfoAble from './pages/product/ProductInfoAble';
import Cooperation from './pages/CooperationAble';
// import Login from './pages/login';
// import Write from './pages/write';

import store from './store';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
//import beian_icon from '/assets/beian_icon.jpg';

const { Header, Footer, Content } = Layout;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 700
    }
  }

  componentDidMount() {

    const height = this.getClientHeight();
    this.setState({
      windowHeight: height - 56 - 64
    })
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Header style={{ height: 56, backgroundColor: 'white', padding: '0 0' }}>
              <BOHeader />
            </Header>
            <Content style={{ backgroundColor: 'white', minHeight: this.state.windowHeight }}>
              <Route path='/' exact component={Home}></Route>
              {/* <Route path='/login' exact component={Login}></Route> */}
              {/* <Route path='/write' exact component={Write}></Route> */}
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/home' exact component={Home}></Route>
              <Route path='/product' exact component={ProductAble}></Route>
              <Route path='/news' exact component={News}></Route>
              <Route path='/hr' exact component={Hr}></Route>
              <Route path='/about' exact component={About}></Route>
              <Route path='/pdfViewer' exact component={MyPdfViewerAble} />
              {/* <Route path='/productInfo' exact component={ProductInfoAble} /> */}
              {/* <Route path='/cooperation' exact component={Cooperation} /> */}
            </Content>


            <Footer style={{ height: 64, background: '#63B127', textAlign: 'center', color: 'white' }}>
              <div style={{ flexDirection: 'column', marginTop: -12 }}>
                <Link to='/about' style={{ color: 'white', width: 100 }}>  关于我们  </Link>  |
                <Link to='/hr' style={{ color: 'white', width: 100 }}>  人力资源  </Link>  |
                <Link to='/news' style={{ color: 'white' }}>  新闻中心  </Link>  |
                <Link to='/product' style={{ color: 'white' }}>  产品中心  </Link> <br />
                <div style={{ marginTop: 1 }}>
                  版权所有 ©2019 天津双博农业科技有限公司 /<a href="https://beian.miit.gov.cn/" style={{ color: 'white' }}>津ICP备19008092号-1</a>  /
                  <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011502000505" style={{ color: 'white' }}><img src='/assets/beian_icon.png' alt='img' />津公网安备 12011502000505号</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;技术支持 mybadge
                </div>
              </div>

            </Footer>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }

  getClientHeight() {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    else {
      clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
  }
}

export default App;
