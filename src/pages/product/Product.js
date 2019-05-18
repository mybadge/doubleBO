import React, { PureComponent } from 'react';

import { Card } from 'antd';

import { connect } from 'react-redux';
import { actionCreators } from './store';
// import { Link } from 'react-router-dom';


const { Meta } = Card;

class Product extends PureComponent {
    
    componentDidMount() {
      this.props.getProductData();
    }

    render() {
      const { list } = this.props;
      return (
        <div style={{display:'flex', flexWrap: 'wrap', margin: '20px 0px 20px 0px'}}>
          {
            list.map((item, index) => {
              return (
                  <Card
                    key={index}
                    hoverable
                    
                    style={{width: 240, marginLeft: 10, marginTop: 10 }}
                    cover={
                      <img alt="example" 
                        // src="http://pic32.nipic.com/20130823/13339320_183302468194_2.jpg" 
                        scr={'http://192.168.1.4:3000/'+item.get('imgUrl')}
                        style={{width: 240, height: 300}}
                      />}
                  >
                    <Meta
                      title={item.get('title')}
                      description={item.get('desc')}
                      //title="香河苦瓜实验"
                      //description="香河苦瓜实验-增大叶面积指数，提高光合能力，增加作物产量"
                    />
                  </Card>
                
              );
            })
            //this.gereryCard()
          }
        </div>
      );
    }

    // gereryCard() {
    //   const listData = [];
    //   for (let i = 0; i < 23; i++) {
    //     listData.push( 
    //         <Card
    //           key={i}
    //           hoverable
              
    //           style={{ width: 240, marginLeft: 10, marginTop: 10 }}
    //           cover={
    //             <img alt="example" 
    //                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
    //               //  scr={pro08}
    //             />}
    //         >
    //           <Meta
    //             title="香河苦瓜实验"
    //             description="香河苦瓜实验-增大叶面积指数，提高光合能力，增加作物产量"
    //           />
    //         </Card>
    //       )
    //   }
    //   return listData;
    // }
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
