import React, { Component } from 'react';

import { Layout, Button, Input } from 'antd';
import MyHeader from './common/header'

const { Header, Footer, Content } = Layout;
const Search = Input.Search;

class MyApp extends Component {
    
    render() {
        return (<div>
            <Layout>
            <Header style={ {height: 64, background: 'white'} }><MyHeader></MyHeader></Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
            </Layout>
        </div>);
    }
}

export default MyApp;