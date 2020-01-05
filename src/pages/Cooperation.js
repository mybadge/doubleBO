import React, { PureComponent } from 'react';

import { Typography } from 'antd';


const { Title, Paragraph } = Typography;

export default class About extends PureComponent {
  render() {
    return (
      <div style={{ margin: '20px auto', maxWidth: '960px', paddingLeft: '20px', paddingRight: '20px' }}>
        <Typography style={{ lineHeight: '1.8em', fontSize: 18, textAlign: 'justify' }}>
          <Title level={2} style={{ textAlign: 'left' }}>一、为何选择我们</Title>
            <ul>
              <li>我们的宗旨是改良土壤、让土地恢复健康；为种植客户的产品增产、提质提供全方位的服务和周到的技术支持。</li>
              <li>我国是农业大国，改良土壤、改善环境及粮食安全问题已上升为基本国策，未来将是发展生态农业的时代。生态沼液肥项目意义明确，市场广泛，符合国家产业发展政策。中粮集团是国内农业领域的支柱企业，我公司与中粮集团为战略合作关系，是目前国内唯一一家与中粮合作生产生态沼液肥的企业。</li>
              <li>依托中粮强大资源及品牌优势，是确保合作伙伴获取丰厚利益强有力的保障。</li><li>我们拥有中粮提供的期限为20年的优质、免费的生产生态沼液肥的原材料及建厂用地和水电设施，这些优质资源及中粮强大的品牌效应，对合作者来说，是一个绝佳的投入机会，未来必将获得巨大的利益。</li><li>选择与我公司合作，不但能帮您获取超出想象的财富结果，而且还能彰显您的人生价值，甚至改变您整个家族的命运。</li><li>公司拥有已获授权的16项实用新型和三项发明专利。</li>
            </ul>
          
          <Title level={2} style={{ textAlign: 'left' }}>二、合作方式</Title>
          <Title level={4} style={{ textAlign: 'left' }}>1、联合创始人合作方式（期限为5年）</Title>
            <ul>
              <li>
                经公司股东大会决议，同意本次将公司股本增至2800万的定向增资方案，决定诚招联合创始人，拟向联合创始人出让800万股份，每股人民币1元，5万股起购，合同有效期内，联合创始人只享有公司年终税后利润收益权。
                </li>
            </ul>
            <Title level={4} style={{ textAlign: 'left' }}>2、营销合伙人合作方式（期限为5年）</Title>
            <ul>
              <li>
                订购1200元20桶沼液肥成为普通VIP客户，普通VIP客户每分享成功一个客户，即获得分享客户已支付款的10%的奖励（代金劵+现金，代金券在重复消费时可以抵现金）；
                </li>
              <li>订购6000元100桶沼液肥成为银牌VIP客户，银牌VIP客每分享成功一个客户，即获得分享客户已支付货款20%的奖励（代金券+现金，代金券在重复消费时可以抵现金）；
                </li>
              <li>订购18000元300桶沼液肥成为公司营销合伙人，营销合伙人每分享成功一个客户，即获得分享客户已支付货款的35%的奖励（代金券+现金，代金券在重复消费时可以抵现金），同时公司赠送股份18000股，享有公司年终利润分红；
                  </li>
              <li>订购36000元600桶沼液肥成为公司营销合伙人，营销合伙人每分享成功一个客户，即获得分享客户已支付货款的45%的奖励（代金券+现金，代金券在重复消费时可以抵现金），同时公司赠送股份36000股，享有公司年终利润分红；
            </li></ul>
            <Title level={4} style={{ textAlign: 'left' }}>3、区域代理合作方式（代理期限为3年）</Title>
            <ul><li>一级代理：一次定购50吨产品（30万），享有每吨返润2000元，同时公司赠送股份30万股，享有公司年终利润分红；
              </li>
              <li>二级代理：一次定购20吨产品（12万），享有每吨返润1000元，同时公司赠送股份12万股，享有公司年终利润分红；可累计升级一级代理；
                </li>
              <li>三级代理：一次定购5吨产品（3万）；享有每吨返润500元可累计升级一至二级代理；合同有效期内，如代理商在代理合同期满时未将订购的产品销售出去，且不在续签代理合同，公司一次性将代理商未提走部分产品原价退给代理商，代理商亦不享有配送股份。
              </li></ul>
            <Title level={4} style={{ textAlign: 'left' }}>4、推荐人合作方式</Title>
            <ul><li>推荐人每成功为公司推荐一位合作伙伴，即获得投资伙伴已实际支付投资金额10%的奖励。励（代金券+现金，代金券在重复消费时可以抵现金）；</li></ul>
          <Title level={2} style={{ textAlign: 'left' }}>三、欢迎加入</Title>
          <Paragraph>因您的要求而改变财富电话：022-22458698、15030694688、16727415888</Paragraph>
          <Paragraph>单位地址: 天津宝坻节能环保工业区清华紫荆802-804</Paragraph>
        </Typography>
      </div>
    );
  }
}