import React, { PureComponent } from 'react';

import { Typography } from 'antd';


const { Title, Paragraph } = Typography;

export default class About extends PureComponent {
  render() {
    return (
      <div style={{ margin: '20px auto', maxWidth: '960px', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ float: 'right', marginRight: '20px' }}>
          <img alt='img' style={{ margin: '20px auto 0px 10px' }} src='/assets/compony_logo.png' />
        </div>
        <Typography style={{ lineHeight: '1.8em', fontSize: 18, textAlign: 'justify' }}>
          <Title level={2} style={{ textAlign: 'center' }}>一、公司概况</Title>
          <Paragraph>
            天津双博农业科技有限公司于2015年5月6日成立，主营：生物有机肥料研发；肥料生产；肥料销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；花卉种植；蔬菜种植；新鲜水果批发；新鲜蔬菜批发；畜禽粪污处理利用。
            <br />公司于2015年6月28日，与中粮肉食（天津）有限公司签订期限为20年的有机肥项目合作协议。 公司在利用沼液、沼渣研制生产生态沼液肥、沼渣肥、改良土壤等领域，已获16项国家实用新型专利和2项软著  2018.1被授予国家重点研发计划项目（2017YFD0800804-04）沼肥安全施用技术示范基地。 <br />本企业于2018年1月25日通过9001国际质量管理体系认证。
            2020年1月10日，由本企业提出的，由北京市农林科学院植物营养与资源研究所和本企业本共同负责起草的13项企业标准，在国家企业标准信息公共服务平台发布。<br />2020年7月24日，本企业被评为天津市雏鹰企业。<br /> 沃•双博商标，是公司产品在中国的注册商标。
            <br />沃•双博注册商标旗下的生态沼液肥系列产品是由天津双博农业科技有限公司与北京农林科学院共同研发、由中粮肉食（天津）有限公司和天津双博农业科技有限公司合作生产的新一代农业生产用肥。
            公司为客户提供从测土到土壤改良的全套作物生长解决方案；为客户解决因长期大量使用化肥带来的土壤酸化、退化、病虫害加重、农产品品质下降等问题，解决重茬连作障碍，实现土壤可持续生产。
          </Paragraph>

          <Title level={2} style={{ textAlign: 'center' }}>二、沃•双博生态沼液肥产品介绍</Title>
          <Paragraph>
            “本品采用中粮养殖场产出的沼液为介质，经多道中温厌氧发酵、多级纳米透析膜浓缩提纯而成，富含百余种小分子有机物质（多肽、多糖、氨基酸、腐殖酸、黄腐酸、海藻素、核酸、维生素、抗菌素等）及高效活性菌，活性高、易吸收。产品绿色安全，可改良土壤、消除盐害、生根壮苗、缓解药肥害、抗重茬，有效提高作物抗病抗逆能力，本品适用各种果蔬类、果树类及地下根茎类等经济作物。
          </Paragraph>
          <Title level={4}>1、产品说明</Title>
          <Paragraph>
            促进土壤团粒结构形成，调节酸碱、打破板结、增加土壤透气性。
            <br />小分子营养物质及生根因子，刺激根系生长，提高肥料利用率，缓苗快、秧苗壮。
            <br />植物内源刺激素及活性物质，激活作物潜能，缓解作物药害、肥害，焕发作物活力。
            <br />有益菌、多肽、多糖、抗菌素等元素，提高作物免疫力，减少病虫害的发生，抗重茬能力强。
          </Paragraph>
          <Title level={4}>2、产品形态</Title>
          <Paragraph>
            深褐色水剂
          </Paragraph>
          <Title level={4}>3、主要技术指标</Title>
          <Paragraph>
            Ca+Mg≥100g/L；中微量元素适量
          </Paragraph>
          <Title level={4}>4、适用作物</Title>
          <Paragraph>
            果树类作物：苹果、枸杞、樱桃、草莓、葡萄、杏、梨、红枣、芒果、香蕉等；
            <br />灌木类作物：莓茶、白茶、黄金茶等。
            <br />蔬果类作物：黄瓜、茄子、西红柿、辣椒、苦瓜、西瓜、甜瓜、豆角、白菜、韭菜、莴笋、甘蓝、生菜等。
            <br />地下根茎类作物：大葱、大蒜、大姜、洋葱、土豆、芋头、山药等。
          </Paragraph>

          <Title level={2} style={{ textAlign: 'center' }}>三、沃•双博生态沼液肥产品施用方法</Title>
          <Title level={4}>1、施用方法</Title>
          <Paragraph>
            缓苗期追肥：按1：30倍稀释后随水冲施或按1：300倍稀释后叶面喷施；冲施每亩施用量40-50公斤。
            <br />苗期追肥：按1：30倍稀释后随水冲施或按1：300倍稀释后叶面喷施；冲施每亩施用量50-60公斤。
            <br />花期追肥：按1：30倍稀释后随水冲施或按1：300倍稀释后叶面喷施；冲施每亩施用量40-50公斤。
            <br />果实膨大期追肥：按1：30倍稀释后随水冲施或按1：300倍稀释后叶面喷施；冲施每亩施用量40-60公斤。
          </Paragraph>
          <Title level={4}>2、注意事项</Title>
          <Paragraph>
            本品不宜久置；用前请摇匀；室内避光隔热存放，施用温度不宜低于23度。
            <br />本品与杀菌剂间隔5-7天使用，禁止直接与杀菌剂、除草剂混合使用。
            <br />本品低温时养分饱和析出会有少许沉淀，遇水可溶，不影响效果。
            <br />本品久置出现的漂浮物、絮凝属正常现象，不影响效果。
            <br />本品与化肥混合使用时，请先稀释本产品后再混配。本品保质期12个月，详见生产日期。
          </Paragraph>

          <Title level={2} style={{ textAlign: 'center' }}>四、沃•双博生态沼液肥产品与其他肥料的区别</Title>
          <Title level={4}>1、沃•双博生态沼液肥与农家肥的区别</Title>
          <Paragraph>
            一般来说，没经过无害化处理的农家肥，存在许多缺陷，一是盐分较多，容易使土壤盐化，出苗不整齐，生根慢；二是自带较多的病菌、虫卵，易引发病虫害；三是养分含量不稳定，无法保证足够的养分，且易烧苗烧根。
            <br />生态沼液肥中含有丰富的营养物质和生物活性物质,
            可作为缓速兼备的肥料和具备一定功效的土壤改良剂，实验证明，生态沼液肥的肥效是普通农家肥肥效的10倍以上。
            <br />用传统方法直接发酵的农家有机肥中基本上不含有微生物的活性菌，也就不具有生态沼液肥中因活性菌带来的生物活性，其使用效果也就远远不如用沼液发酵原液为介质制成的生态沼液肥。
            <br />生态沼液肥中含有菌群的实际密度和数量，更是远远地高于传统农家有机肥，因此，两者的肥力和作用效果相差巨大，完全不可相比。
          </Paragraph>

          <Title level={4}>2、沃•双博生态沼液肥与化肥的区别</Title>
          <Paragraph>
            生态沼液肥营养元素齐全；化肥营养元素只有一种或几种。
            <br />生态沼液肥中微生物的群体连携作用，可以使得有益菌群与土壤中放线菌等共生共殖，提高土壤通透性，形成良好的作物生长环境，而经常用化肥则会造成土壤肥板结。
            <br />生态沼液肥能提高产品品质；施用化肥导致产品品质低劣。
            <br />生态沼液肥能改善作物根际微生物群，提高植物的抗病虫能力；化肥则是作物微生物群体单一，易发生病虫害。
            <br />生态沼液肥能促进化肥的利用，提高化肥利用率；化肥单独使用易造成养分的固定和流失。
          </Paragraph>
          <Title level={4}>3、沃•双博生态沼液肥与其他生物肥产品的区别</Title>
          <Paragraph>
            市面上的那些生物肥产品，基本上都是未经完全发酵的非原液的生物产品，含有致病菌及有害物质。因此，以沼液发酵原液为介质生产的“沃•双博”生态沼液肥系列产品，其菌群的实际密度、数量及施用效果，远远地高于那些非原液的生物肥产品。
          </Paragraph>

          <Title level={2} style={{ textAlign: 'center' }}>二、联系我们</Title>
          <Paragraph>
            联系电话：022-22458698、15030694688
          </Paragraph>
          <Paragraph>
            单位地址：天津市宝坻区史各庄镇尚庄商业楼203-204室
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