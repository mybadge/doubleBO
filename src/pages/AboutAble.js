import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./About'),
  loading() {
  	return <div style={{textAlign:'center'}}>正在加载...</div>
  }
});

export default () => <LoadableComponent/>