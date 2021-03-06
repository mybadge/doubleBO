import React, { PureComponent } from 'react';

import { List, Typography, Button } from 'antd';

import { connect } from 'react-redux';
import { actionCreators } from './home/store';

const { Title, Text } = Typography;



class News extends PureComponent {

  render() {
    return (
      <List
        itemLayout="vertical"
        // split={false}
        style={{ margin: '10px auto', maxWidth: '960px', paddingLeft: '20px', paddingRight: '20px' }}
        header={<Title level={3}>新闻中心</Title>}

        dataSource={this.props.patentList}
        renderItem={item => (
          <List.Item
            key={item.get('detail')}
          // style={{padding:'0 0'}}
          >

            <List.Item.Meta
              title={
                <div>
                  <Text level={4}>【{item.get('time')}】 发布了新专利</Text>
                  {/* <Text style={{float: 'right', color: '#ccc', fontSize:14}}>{'日期:'+}</Text> */}
                  <Button href={item.get('href')} target='_blank' style={{ backgroundColor: '#96C301', color: 'white', height: 28, float: 'right' }}>查看</Button>
                </div>
              }
              description={item.get('title') + ', 专利号:'+ item.get('cnNum') + ',' + item.get('type')}
            >
            </List.Item.Meta>

          </List.Item>
        )}
      />
    );
  }

  componentDidMount() {
    this.props.getNewsList()
    this.props.getPatentList()
  }
}


const mapState = (state) => ({
  newList: state.getIn(['home', 'newList']),
  patentList: state.getIn(['home', 'patentList'])
})

const mapDispatch = (dispatch) => ({
  getNewsList() {
    dispatch(actionCreators.getNewsList());
  },
  getPatentList() {
    dispatch(actionCreators.getPatentList());
  }
});

export default connect(mapState, mapDispatch)(News);