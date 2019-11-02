import React, { PureComponent } from 'react';

import { Card } from 'antd';

import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';


const { Meta } = Card;

class Product extends PureComponent {
    
    componentDidMount() {
      this.props.getProductData();
    }

    render() {
      const { list } = this.props;
      return (
        <div style={{display:'flex', flexWrap: 'wrap', margin: '20px auto', maxWidth:'1040px', paddingLeft: '20px', paddingRight: '20px'}}>
          {
            list.map((item, index) => {
              return (
                  <Link to='/productInfo' key={index}>
                    <Card
                      hoverable
                      style={{width: 480, marginLeft: 10, marginTop: 10 }}
                      cover={
                        <div style={{flexDirection:'row', padding:10}}><img alt="example" 
                          src={item.get('imgUrl')}
                          style={{width: 225, height: 300}}
                        /><img alt="example" 
                        src={item.get('img2Url')}
                        style={{width: 225, height: 300, marginLeft:5}}
                      /></div>}
                        
                    >
                      <Meta
                        title={item.get('title')}
                        description={item.get('desc')}
                        //title="香河苦瓜实验"
                        //description="香河苦瓜实验-增大叶面积指数，提高光合能力，增加作物产量"
                      />
                    </Card>
                  </Link>
              );
            })
          }
        </div>
      );
    }
}

const mapState = (state) => ({
	list: state.getIn(['product', 'list'])
})

const mapDispatch = (dispatch) => ({
	getProductData() {
    dispatch(actionCreators.getProductInfo());
	}
});

export default connect(mapState, mapDispatch)(Product);
