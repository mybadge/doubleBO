import React, { PureComponent } from 'react';

import { Card } from 'antd';
// import pro08 from '../statics/pro08.jpg'
const { Meta } = Card;

export default class Product extends PureComponent {
    
    render() {
        return (
              <div style={{display:'flex', flexWrap: 'wrap', margin: '20px 0px 20px 0px'}}>
                {
                  this.gereryCard()
                }
              </div>
          );
    }

    gereryCard() {
      const listData = [];
      for (let i = 0; i < 23; i++) {
        listData.push( 
            <Card
              key={i}
              hoverable
              
              style={{ width: 240, marginLeft: 10, marginTop: 10 }}
              cover={
                <img alt="example" 
                   src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
                  //  scr={pro08}
                />}
            >
              <Meta
                title="Europe Street beat"
                description="香河苦瓜实验-增大叶面积指数，提高光合能力，增加作物产量"
              />
            </Card>
          )
      }
      return listData;
    }
}


// import { List, Avatar, Icon } from 'antd';
// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'http://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

// const IconText = ({ type, text }) => (
//   <span>
//     <Icon type={type} style={{ marginRight: 8 }} />
//     {text}
//   </span>
// );


// export default class Product extends PureComponent {
//     render() {
//         return (
//             <List 
//             style={{margin: '0 100px 50px 100px'}}
//             itemLayout="vertical"
//             size="large"
//             pagination={{
//               onChange: (page) => {
//                 console.log(page);
//               },
//               pageSize: 3,
//             }}
//             dataSource={listData}
//             footer={<div><b>ant design</b> footer part</div>}
//             renderItem={item => (
//               <List.Item
//                 key={item.title}
//                 actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
//                 extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
//               >
//                 <List.Item.Meta
//                   avatar={<Avatar src={item.avatar} />}
//                   title={<a href={item.href}>{item.title}</a>}
//                   description={item.description}
//                 />
//                 {item.content}
//               </List.Item>
//             )}
//           />
//         );
//     }
// }



