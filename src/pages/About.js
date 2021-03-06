import React, { PureComponent } from 'react';

import { Typography } from 'antd';


const { Title, Paragraph, Text } = Typography;

export default class About extends PureComponent {
    render() {
        return (
          <div style={{margin:'20px auto', maxWidth:'960px', paddingLeft: '20px', paddingRight: '20px'}}>
            <div style={{float:'right',marginRight: '20px' }}>
              <img alt='img' style={{margin: '20px auto 0px 10px'}} src='/assets/compony_logo.png' />
            </div>
            <Typography style={{lineHeight: '1.8em', fontSize: 18, textAlign: 'justify'}}>
              <Title level={2} style={{textAlign:'center'}}>一、公司概况</Title>
              <Paragraph>
                天津双博农业科技有限公司成立于2015年5月6日，初期注册资本2000万元人民币，公司注册地为天津宝坻节能环保工业区清华紫荆802-804，营业执照注册号91120224328588995X；<br/>天津双博农业科技有限公司是一家从事以沼液、沼渣为介质的新型肥料的研发、生产和销售为一体的高新技术企业，主营：农业技术研发、技术推广、技术咨询、水溶肥料、微生物肥料及其他有机肥生产、销售；农作物种植、销售；沼气发电。天津双博农业科技有限公司拥有强大的科研队伍，与北京农林科学院、中国农业大学、天津市一轻局微生物研究所、三河市职教中心等科研所建立了密切的合作关系，开发、研制、生产、销售以沼液、沼渣为介质的系列生态肥料，走产、学、研相结合的发展道路，并取得良好的效果。
              </Paragraph>
              <Paragraph>主营业务：农业技术研发、技术推广、技术咨询、水溶肥料、微生物肥料及其他有机肥生产、销售；农作物种植、销售；沼气发电。</Paragraph>
              <Paragraph>企业已通过GB/T19001-2016/ISO 9001：2015质量管理体系认证，证书号：17918Q10446ROM。</Paragraph>
              <Paragraph>公司于2015年6月28日，与中粮肉食（天津）有限公司签订期限为20年的有机肥项目合作协议。</Paragraph>
              <Paragraph>“沃•双博”商标，是公司产品在中国的注册商标。</Paragraph>
              <Paragraph>
                “沃•双博”生态沼液肥系列产品是由天津双博农业科技有限公司与北京农林科学院共同研发、由中粮肉食（天津）有限公司和天津双博农业科技有限公司合作生产的新一代农业生产用肥。<br/>&nbsp;&nbsp;&nbsp;&nbsp;公司目前有七款产品，广泛应用于：叶菜类、果树类、粮食类、瓜果蔬菜类、园林绿化类、花卉类、中草药类等领域。<br/>&nbsp;&nbsp;&nbsp;&nbsp;公司目前在利用沼液、沼渣研制生态沼液、沼渣肥改良土壤等领域，已获取20项国家专利。在众多的同行业中形成自己的特色和优势,并通过国际质量管理体系认证。<br/>&nbsp;&nbsp;&nbsp;&nbsp;公司将坚持依靠科技服务农业，以质量求生存，以信誉求发展的宗旨，为我国的农业可持续发展和绿色有机食品基地的建设做出应有的贡献。<br/>&nbsp;&nbsp;&nbsp;&nbsp;按照公司确定的中长期战略发展目标，强化学习力、执行力建设，充分发挥公司人才、技术、管理优势、加快推进公司建设步伐，打造诚信企业，铸就“沃•双博”品牌。
              </Paragraph> 

              <Paragraph>
                <Text style={{fontWeight:'bold'}}>企业文化:</Text>  生产优质的生态沼液肥、微生物肥及其他有机肥系列产品，成为行业标杆，最大限度减少化肥、农药、除草剂、催熟剂在农作物上的使用，改良土壤、改善环境，从根源上解决“病从口入”的问题，沃▪双博生态沼液肥，因您的需求而改变！<br/>
                <Text style={{fontWeight:'bold'}}>企业精神:</Text>  诚实、正直、公平、利他、厚德、包容<br/>
                <Text style={{fontWeight:'bold'}}>服务宣言:</Text>  合作共赢、与合作伙伴及员工共同成长；<br/>
              </Paragraph>

              <Paragraph>
                <p style={{fontWeight:'bold'}}>公司的核心产品：</p>
                1、“沃▪双博”生态沼液肥（叶菜类专用），产品执行标准Q/12SBN 0001—2020；<br/>
                2、“沃▪双博”生态沼液肥（瓜果蔬菜类专用），产品执行标准Q/12SBN 0001—2020；<br/>
                3、“沃▪双博”生态沼液肥（粮食类专用），产品执行标准Q/12SBN 0001—2020；<br/>
                4、“沃▪双博”生态沼液肥（园林绿化类专用），产品执行标准Q/12SBN 0001—2020；<br/>
                5、“沃▪双博”生态沼液肥（花卉类专用），产品执行标准Q/12SBN 0001—2020；<br/>
                6、“沃▪双博”生态沼液肥（果树类专用），产品执行标准Q/12SBN 0001—2020；<br/>
                7、“沃▪双博”生态沼液肥（中草药类专用），产品执行标准Q/12SBN 0001—2020；
              </Paragraph>
              
              <Title level={2} style={{textAlign:'center'}}>二、“沃•双博”生态沼液肥</Title>
              <Paragraph>
                “沃•双博”生态沼液肥系列产品以中粮肉食（天津）有限公司养殖一场产出的经过中温厌氧发酵后的沼液为介质，利用生物技术，按一定比例添加功能性复合菌组、活性酶等原料再进行第三次中温厌氧发酵，同时加入天然有机酸、中微量元素和植物生长所需的其他元素，由多种物质以物理、生化的方式复配加工生产，产品无任何毒副作用。<br/>“沃•双博”生态沼液肥系列产品以中粮肉食（天津）有限公司养殖一场产出的经过中温厌氧发酵后的沼液为介质，利用生物技术，按一定比例添加功能性复合菌组、活性酶等原料再进行第三次中温厌氧发酵，同时加入天然有机酸、中微量元素和植物生长所需的其他元素，由多种物质以物理、生化的方式复配加工生产，产品无任何毒副作用。“沃•双博”生态沼液肥系列产品的主要形态为水剂悬浊液、颜色为茶色或褐色；产品的主要成分为养分全面速效氮、磷、钾，其中氮部分主要为铵态氮，少部分为氨基酸及各种中微量元素、氨基酸类(不少于17种），糖类、吲哚乙酸、丁酸、赤霉素、细胞分裂素、B族维生素、核酸及各种酶等生物活性物质，另外还有植物抗冷物质(脯氨酸、亚油酸、黄腐酸)等天然激素，这些生物活性物质易于被种子吸收，能有效的激活种子胚乳中的酶原，增强酶的活性，促进发芽和刺激生长。
              </Paragraph>
              <Title level={4}>1、“沃•双博”生态沼液肥的特点</Title>
              <Paragraph>
                <ul>
                  <li>养分含量齐全，不但含有作物生长必须的<Text>氮、磷、钾</Text>
                    大量元素，还含有<Text>锌、铁等多种微量元素</Text></li>
                  <li>长期的厌氧发酵环境使生态沼液肥能将土壤中大量的病菌、虫卵和杂草种子窒息而亡，比较安全。 </li>
                  <li>生态沼液肥的速效性很强，养分可利用率高，能迅速让作物吸收利用，同时由于有机质含量高、肥效稳定、后劲长、固速效与缓效兼备。</li>
                </ul>
              </Paragraph>
              <Title level={4}>2、生态沼液肥的功能</Title>
              <Paragraph>
                <ul>
                    <li>提高作物产量<br/>
                    生态沼液肥中含有丰富的营养物质和维生素、生长素等生物活性物质，这些在发酵过程中形成的小分子物质，其结构简单，易于被作物吸收，能向作物提供氮、磷、钾等主要营养元素。生态沼液肥有助于植物体内的氮代谢，可以促进植物根系发育，增强植株的抗病能力，具有较好增产效果。
                    </li>
                    <li> 改善土壤理化性质<br/>
                      坚持使用生态沼液肥，能够改善土壤的理化性质，不仅补充土壤的营养还可以增加种植层深度，有利于土壤团粒结构的形成，同时提高土壤氮、磷、钾和有机质的含量。施用生态沼液肥可以不同程度的活化土壤中的铜、锌、铁等微量元素，调整土壤的碳氮比，疏松活化土壤，提高土壤通透性。满足土壤微生物的营养需求。</li>
                      <li>促进果菜蛋白质、糖、维生素等养分的吸收，有效改善农产品品质和外观；多种大量微生物菌起到抗病抑虫、抗重茬的功效。</li>
                      <li>微生物菌解磷、解钾、固氮；生态沼液肥中的生物蛋白酶，加快各种营养元素的转化。</li>
                  </ul>
                </Paragraph>
              <Title level={2} style={{textAlign:'center'}}>三、生态沼液肥与其他肥料的区别</Title>
              <Title level={4}>1、“沃•双博”生态沼液肥与农家肥的区别</Title>
              <Paragraph>
                <ul>
                  <li>一般来说，没经过无害化处理的农家肥，存在许多缺陷，一盐分较多，容易使土壤盐化，出苗不整齐，生根慢；二是自带较多的病菌、虫卵，易引发病虫害；三是含量不稳定，无法保证足够的养分，且易烧苗烧根。</li>
                  <li>生态沼液肥中含有丰富的营养物质和生物活性物质，可作为缓速兼备的肥料和具备一定功效的土壤改良剂，生态沼液肥的肥效是普通化学合成肥料的10倍以上。</li>
                  <li>用传统方法直接发酵的农家有机肥中基本上不含有微生物的活性菌，也就不具有生态沼液肥中因活性菌带来的生物活性，其使用效果也就远远不如用沼液发酵原液为介质制成的生态沼液肥。</li>
                  <li>生态沼液肥中含有菌群的实际密度和数量，更是远远地高于传统农家有机肥，因此，两者的肥力和作用效果相差巨大，完全不可相比。</li>
                </ul>
              </Paragraph>
              <Title level={4}>2、“沃•双博”生态物沼液肥与化肥的区别</Title>
              <Paragraph>
                <ul>
                  <li>生态沼液肥营养元素齐全；化肥营养元素只有一种或几种。</li>
                  <li>生态沼液肥能够改良土壤，微生物的群体连携作用，可以使得有益菌群与土壤中放线菌等共生共殖，形成良好的作物生长环境。经常用化肥会造成土壤肥板结。</li>
                  <li>生态沼液肥能提高产品品质；施用化肥导致产品品质低劣。</li>
                  <li>生态沼液肥能改善作物根际微生物群，提高植物的抗病虫能力；化肥则是作物微生物群体单一，易发生病虫害。</li>
                  <li>生态沼液肥能促进化肥的利用，提高化肥利用率；化单独使用易造成养分的固定和流失。</li>
                </ul>
              </Paragraph>
              <Title level={4}>3、生态物沼液肥与其他生物肥产品的区别</Title>
              <Paragraph>市面上的那些生物肥产品，基本上都是未经完全发酵的非原液的生物产品，含有致病菌及有害物质。因此，以沼液发酵原液为介质生产的“沃•双博”生态沼液肥系列产品，其菌群的实际密度、数量及施用效果，高于那些非原液生物肥产品。</Paragraph>

              <Title level={2} style={{textAlign:'center'}}>四、联系我们</Title>
              <Paragraph>
                单位电话: 022-22458698
              </Paragraph>
              <Paragraph>
                单位地址: 天津宝坻节能环保工业区清华紫荆802-804
              </Paragraph>
              </Typography>
{/* <Title level={2}>时间线</Title>
<Timeline mode="alternate" style={{marginTop: 50}}>
  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
  <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
  <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Timeline.Item>
  <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
  <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
</Timeline> */}

           
          </div>
          
        );
    }
}