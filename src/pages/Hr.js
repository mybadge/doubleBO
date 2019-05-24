import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './home/store';
import { Link } from 'react-router-dom';

import { List, Typography, Button, Divider } from 'antd';

const { Title, Text } = Typography;


class Hr extends PureComponent {

    render() {
        return (
          <List
            itemLayout="vertical"
            // split={false}
            style={{margin: '10 10',}}
            header={<Title level={3}>最新招聘</Title>}
    
            dataSource={this.props.list}
            renderItem={item => (
              <List.Item
                key={item.get('id')}
                // style={{padding:'0 0'}}
              >

                <List.Item.Meta
                  title={
                    <div>
                      <Text level={4}>{item.get('title')}</Text>
                      <Text style={{float: 'right', color: '#ccc', fontSize:14}}>{'日期:'+item.get('date')}</Text>
                    </div>
                  }
                  description={item.get('desc')}
                >
                </List.Item.Meta>
                <Link to='/hr'><Button style={{backgroundColor:'#96C301', color:'white', height: 28}}>More</Button></Link>
                {/* <Divider dashed /> */}
              </List.Item>
            )}
          />
        );
    }


    componentDidMount() {
      this.props.getHrList()
    }
}

const mapState = (state) => ({
	list: state.getIn(['home', 'hrList'])
})

const mapDispatch = (dispatch) => ({
	getHrList() {
		dispatch(actionCreators.getHrList());
	}
});

export default connect(mapState, mapDispatch)(Hr);