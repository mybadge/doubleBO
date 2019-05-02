import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Logo } from './style';

const { Header } = Layout;

export default class BOHeader extends Component {

    render() {
        return (
            <Header style={{background: 'white'}}>
                <Logo />
                <Menu
                    
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '56px' }}
                >
                    <Menu.Item key="1"><Link to='/home'>首页</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/product'>产品中心</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/news'>新闻中心</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/hr'>人力资源</Link></Menu.Item>
                    <Menu.Item key="5"><Link to='/contact'>联系我们</Link></Menu.Item>
                </Menu>
            </Header>
        );
    }
}



// #components-layout-demo-top .logo {
//  
// }