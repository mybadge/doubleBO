import React, { PureComponent } from 'react';

import { Typography, Table } from 'antd';

import './product.css'

const { Title, Paragraph } = Typography;
const columns = [
  {
    title: '使用时期',
    dataIndex: 'name',
  },
  {
    title: '施用方法及用量',
    dataIndex: 'method',
    render: (text) => <div style={{textAlign: 'left'}}>{text}</div>
  }
];

const data = [
  {
    key: '1',
    name: '生长期',
    method: '按1:30倍稀释后冲施或按1:300倍稀释后叶面 喷施;冲施每亩施用量40-50公斤',
  },
  {
    key: '2',
    name: '花果期',
    method: '按1:30倍稀释后冲施或按1:300倍稀释后叶面 喷施;冲施每亩施用量30-40公斤',
  },
  {
    key: '3',
    name: '注意事项',
    method: '用前请摇匀，宜在阴凉干燥处保存，本品含活性 微生物菌，不可与杀菌剂、除草剂等同时使用。 保质期12个月。',
  },
];

class ProductInfo extends PureComponent {
    
    componentDidMount() {
      //this.props.getProductData();
    }

    render() {
      return (
        <div style={{margin:'20px auto', maxWidth:'960px', paddingLeft: '20px', paddingRight: '20px'}}>
          <Typography style={{lineHeight: '1.8em', fontSize: 18, textAlign: 'justify'}} >
            
            <Title level={2} style={{textAlign:'center'}}>产品信息</Title>
            <Title level={4} >一、产品介绍 </Title>
            <Paragraph>
              “沃•双博”生态沼液肥系列产品是由天津双博农业科技有限公司研发、由中粮肉食(天津)有限公司和天津双博农业科技有限公司共同生产的新一代农业生产用肥，产品以中粮肉食(天津有限公司养殖一场产出的经过中温厌氧发酵后的沼液为介质，利用生物技术，按一定比例添加功能性复合菌组、活性酶等原料再进行低温发酵，同时加入天然有机酸、中微量元素、天然矿务成分和植物生长所需的其他元素，由多种物质以物理、生化的方式复配加工生产，产品无任何毒副作用。
            </Paragraph>
            <Title level={4} >二、产品介质沼液</Title>
            <Paragraph>
              1、沼液是动物排泄物经中温厌氧发酵沤制而成，不仅含有植 ) 物所需的氮、磷、钾等大量元素，也含有植物所需的钼、锌、铁、铜等微量元素，被称之缓释性的完全性肥料。
              2、沼液的主要形态为水剂或悬浊液、颜色为茶色或褐色;沼 液的主要成分为养分全面速效的氮、磷、钾，其中N(2.2g/L)、 P(0.7g/L)、K( 2.3 g/L)，其中氮部分主要为铵态氮，少部 分为氨基酸及各种中微量元素、氨基酸类(不少于17种)，糖类、 吲哚乙酸、丁酸、赤霉素、细胞分裂素、B族维生素、核酸、抗 生素及各种酶等生物活性物质，且种类相当复杂，另外还有植物 抗冷物质(脯氨酸、亚油酸、黄腐酸)等天然激素，沼液特点为:
              (1)安全、高效速溶、养分全面、全面供给植物所需养分; <br />
              (2)增加产量、提高品质修复;<br />
              (3)改良土壤;  <br />
              (4)生根、壮秧、抗病、促进品质和风味; <br />
              (5)杀虫和抑菌作用;
            </Paragraph>
            <Title level={4} >三、产品分析</Title>
            <Paragraph>
              生态沼液肥中含有大量的腐植酸和多种植物天然激素，这些生物活性物质易于被种子吸收，能有效的激活种子胚乳中的酶原，增强酶的活性，促进发芽和刺激生长，并能促进苗体内的糖代谢，增加可溶性总糖含量，提高植物体内叶绿素含量，促进植物的光合作用。除此以外还有抑菌和杀菌的作用，有效防止土传病害。
            </Paragraph>
            <Title level={4} >四、产品功效</Title>
            <Paragraph>
              1、促进植物生长:促进种子萌发，提高种子发芽率;<br />
              2、增强植物根系再生能力，促进根系伸长生长，扩大根系分布 面积;  <br />
              3、增大植物叶面积指数，提高光合能力，增加产量; <br />
              4、促进花芽分化，提高花芽数量和蓄期饱满度; <br />
              5、促进植物果实膨大，改善果实质量; <br />
              6、增强植物机体机能; <br />
              7、增强植物内循环，平衡植物各部位营养分配; <br />
              8、提高植物机体机能，提高抗逆性; <br />
              9、产品生产工艺先进、配比科学、养分齐全、活性物质含量高、肥效显著、持续供肥时间长;有力调节作物体内五大内原激素，促进酶活性，提高细胞活力，满足作物不同时期的养分需要，提高养分吸收利用率;促进作物生长，增加光合作用;促进植物根系发育，促使作物提早上市，提高品质，增产增收;<br />
              10、产品含有沼肥的特殊功效，对蚜虫、飞虱等刺吸式害虫有  趋避作用，有效防止作物的生理病害和缺素症的发生;<br /> 
              11、产品具有提高作物免疫力，减少生理病害和因缺素引起的小叶、黄叶、死棵等多种病害。增根、壮苗、促进根系发达、调节叶片气孔的开张度、减少水分蒸腾，增强作物的抗旱、抗干热风、抗寒、抗病等抗逆能力，防徒长、壮茎茂叶、抗倒伏;<br />
              12、产品具有解除药害，快速恢复作物生长，对除草剂药害、 风雹、冻、涝害、重茬、生土地有明显的修复功能;<br />
              13、产品具有提高作物授粉率，增加坐果、结荚、膨果、抽穗 籽粒饱满、增加果穗粒重，提高产量10%-20%以上; 
            </Paragraph>

            <Title level={4} >五、产品与农家肥、化肥的优势</Title>
            <Paragraph>
              1、当前市场90%多为化学氮、磷、钾肥和复合肥，有机肥的占 有量约为3-5%，这首先与大量种植户的传统认知误区有关，也与 、 有机肥的产量不太大、宣传不足有关。在全国有知名度的有机肥品牌乏善可陈，且同质化严重，一般来说，没经过无害化处理的农家肥，存在许多缺陷，一盐分较多，容易使土壤盐化，出苗不整齐，生根慢;二是自带较多的病菌、虫卵，易引发病虫害;三是含量不稳定，无法保证足够的养分，且易烧苗烧根。<br />
              2、生态沼液肥中含有丰富的营养物质和生物活性物质，可作为缓速兼备的肥料和具备一定功效的土壤改良剂，生态沼液肥的肥效是普通化学合成肥料的10倍以上。 <br />
              3、传统化肥施用造成的严重环境污染、生态资源破坏和食品污染已引起社会各界的重视，少用或不用化肥，尽量使用有机肥已是有识之士的共识。国家相关政策层面也提出可持续发展的高效农业，天津双博农业科技有限公司适时提出有机农业与现代农业相结合的发展之路，并制定相关的发展规划。
            </Paragraph>
            <Title level={4} >六、产品的施用方法</Title>
            <Table
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
              rowClassName={this.toggleRowClassName}
              onHeaderRow={column => {
                console.log(column);
              }}
            />
            <Title level={4} >七、产品执行标准、养分含量</Title>
            <Table
              columns={this.generyProductStandColumns()}
              dataSource={this.generyProductStandData()}
              bordered
              pagination={false}
              rowClassName={this.toggleRowClassName}
            />
            <Title level={4} >八、生态沼液肥的发展前景</Title>
            <Paragraph>
              随着国家科技支农力度的不断加大，新老交替从而形成较高学历种植户群体的逐渐壮大以及市场对绿色有机食品需求的高速增长，人们对肥料的要求已不仅仅是为作物提供生长必须的养分，更希望肥料具有如改良土壤、提高作物品质，增产增收等功能，我公司生产的具有如此功能的生态沼液肥系列产品必将对客户够成相当大的吸引力,虽然我公司生成的生态沼液肥系列产品还处于初步开拓市场阶段，但是可预见的未来市场发展前景较为广阔
            </Paragraph>

            <Title level={2} style={{textAlign:'center'}}>营销模式</Title>
            <Title level={4} >一、销售策略</Title>
            <Paragraph>
              1、根据肥料市场化肥占据绝对优势的现状，公司提出开放型直接销售模式。在严格控制终端零售价的前提下，实行不划片自由选择销售,销售人员拥有高低自主权。前期的推广在公司指导支持下由销售人员自行开展。销售人员可自行选择发展下级销售人员、直营店、代理点并享有制定配货价格的灵活支配权。<br />
              2、在销售过程中选择有代理意愿、有推广能力的代理商或直接加盟店。推广中凡是拥有不论规模大小的种植业主和对业主的 够买意向可以施加影响力的人，均为我们的潜在客户或潜在的代理商。<br />
              3、生态沼液肥的推广，要形成明确的市场区隔，避免造成与普通有机肥及化肥在狭小的市场空间中竞争。<br />
              4、开展以主要客户为受众的有针对性的广告宣传，建立点广面宽的销售网络，准确定位突出产品特色，执行有竞争力的价格策略，提供全方位的售前、售中、售后的技术指导服务，从而形成完整的营销推广的体系。 <br />
              5、实际操作过程中，以见效快的叶菜类、瓜果蔬菜类生态沼液肥的使用为市场的切入点，在大面积高附加值作物种植区和大型种植企业，遵循“先实验，后推广”的原则，推广生态沼液肥的市场陪育，与此同时代理商的选择也同步进行。
            </Paragraph>
            <Title level={4} >二、销售管理</Title>  
            <Paragraph>
              1、公司与销售代理签订最低销售任务合同，并提供技术服务支持，销售人员对本人的销售回款负责。销售人员享受出厂价与直接销售之间的差价利润，但严禁超出公司规定范围的赊欠和擅自变动销售终端价格。 <br />
              2、销售人员不论客户级别，均需对客户建立完整的档案资料，由部门经理负责整理归类并报备销售部和公司存档。销售人员之 间必须保持良好的沟通，禁止针对同一个客户重复报价或争抢客户。如确有需要，在征得先期销售人员的同意后方可介入销售推广，其收益由二人协商分享。 <br />
              3、原则上公司在销售走上正轨后，在每个大区配备一名销售区域经理，由区域经理全权负责该区域的客户维护和市场开发工 作，该区域的下级销售人员直营店、代理点均由公司授权的区域 经理管理。 <br />
              4、在区域经理管理下的销售人员，直营店、代理商只享受销售中产生的差价利润，公司不在提供基本工资、返点或其他返利。但销售量达到公司相关规定且在公司自行提货的可享受公司的提货优惠和其他奖励。<br /> 
              5、直接在公司自行提货的代理商由销售经理负责市场维护和售后服务，由销售经理直接负责或委托相关销售人员进行业务培训。 <br />
              6、公司其他部门工作人员，在不影响本职工作前提下，可参与销售推广工作，其销售业绩奖励等同专职销售人员。
            </Paragraph>
            <Title level={4} >三、价格管理</Title>  
            <Paragraph>
              公司实行统一的出厂价和指导性终端零售价，以中粮肉食（天津）有限公司养殖一场为中心50公里范围内公司按出厂价免费配送，超出部分的运费由公司和客户分担。
            </Paragraph>
          </Typography>
        </div>
      );
    }

    toggleRowClassName = (record, index) => {
      let className = 'light-row';
      if (index % 2 === 1) className = 'dark-row';
      return className;
    }
    generyProductStandColumns = () => {
       return [
        {
          title: '序号',
          dataIndex: 'index',
        },
        {
          title: '产品名称',
          dataIndex: 'name',
        },
        {
          title: '总养分g/L',
          dataIndex: 'zyf',
        },
        {
          title: '有机质g/L',
          dataIndex: 'yjz',
        },
        {
          title: '有益菌',
          dataIndex: 'yyj',
        }
      ];
    }
    generyProductStandData = () => {
      return [
        {
          key: '1',
          index: 1,
          name: '叶菜类',
          zyf: '≥60. 0',
          yjz: '≥10. 0',
          yyj: '≥2.0亿/g'
        },{
          key: '2',
          index: 2,
          name: '花卉类',
          zyf: '≥10. 0',
          yjz: '≥10. 0',
          yyj: '≥2.0亿/g'
        },{
          key: '3',
          index: 3,
          name: '中草药类',
          zyf: '≥40. 0',
          yjz: '≥10. 0',
          yyj: '≥2.0亿/g'
        },{
          key: '4',
          index: 4,
          name: '粮食类',
          zyf: '≥20. 0',
          yjz: '≥10. 0',
          yyj: '≥2.0亿/g'
        },{
          key: '5',
          index: 5,
          name: '园林绿化',
          zyf: '≥5. 0',
          yjz: '≥10. 0',
          yyj: '≥2.0亿/g'
        },{
          key: '6',
          index: 6,
          name: '果树类',
          zyf: '≥80. 0',
          yjz: '≥10. 0',
          yyj: '≥2.0亿/g'
        },{
          key: '7',
          index: 7,
          name: '瓜果蔬菜',
          zyf: '≥100. 0',
          yjz: '≥10. 0',
          yyj: '≥2.0亿/g'
        },
     ];
   }
}



export default ProductInfo;
