import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Logo } from './style';

const { Header } = Layout;

class BOHeader extends Component {
    render() {
        return (
            <Header style={{background: 'white'}}>
                <Link to='/home'>
                    <Logo />
                </Link>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['/home']}
                    selectedKeys={[this.props.history.location.pathname]}
                    style={{ lineHeight: '56px' }}
                >
                    <Menu.Item key="/home"><Link to='/home'>首页</Link></Menu.Item>
                    <Menu.Item key="/product"><Link to='/product'>产品中心</Link></Menu.Item>
                    <Menu.Item key="/news"><Link to='/news'>新闻中心</Link></Menu.Item>
                    <Menu.Item key="/hr"><Link to='/hr'>人力资源</Link></Menu.Item>
                    <Menu.Item key="/about"><Link to='/about'>关于我们</Link></Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default withRouter(BOHeader);