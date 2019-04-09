import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MyHeader from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';
import { Layout } from 'antd';
import { FooterWrapper } from './common/header/style'
const { Header, Footer, Content } = Layout;



class App extends Component {
  render() {    
    return (
    	<Provider store={store}>
      	<BrowserRouter>
          <Layout>
            <Header style={ {height: 64, background: 'white'} }>
              <MyHeader></MyHeader>
            </Header>
            <Content>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>

            </Content>
            <Footer>
              <FooterWrapper>
                <br />
                <p>版权所有,侵权必究</p>
                <br />技术支持: 智掌科技
              </FooterWrapper>
            </Footer>
          </Layout>
      	</BrowserRouter>
      </Provider>
    );
  }
}

export default App;
