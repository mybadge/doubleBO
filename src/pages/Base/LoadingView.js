import React from 'react';
import { Spin } from 'antd';

const LoadingView = () => (
    <div style={{textAlign:'center', marginTop: 50}}>
        <Spin size='large' tip='加载中...' />
    </div>
)

export default LoadingView;