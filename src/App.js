import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import BOHeader from './common/myheader';
import Home from './pages/home';
import Product from './pages/Product'
import News from './pages/News'
import Hr from './pages/Hr'
import Contact from './pages/Contact'
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';

import store from './store';
import { Layout } from 'antd';
import { FooterWrapper } from './common/header/style'
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;



class App extends Component {
  render() {    
    return (
    	<Provider store={store}>
      	<BrowserRouter>
          <Layout>
            <Header style={ {height: 56, background: 'white'} }>
              <BOHeader />
            </Header>
            <Content style={{background: 'white', minHeight: 500}}>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/home' exact component={Home}></Route>
              <Route path='/product' exact component={Product}></Route>
              <Route path='/news' exact component={News}></Route>
              <Route path='/hr' exact component={Hr}></Route>
              <Route path='/contact' exact component={Contact}></Route>

            </Content>

            
            <Footer style={{height:64, background: '#999', textAlign: 'center', color: 'white'}}>
                Ant Design ©2018 Created by mybadge
            </Footer>
          </Layout>
      	</BrowserRouter>
      </Provider>
    );
  }
}

export default App;
