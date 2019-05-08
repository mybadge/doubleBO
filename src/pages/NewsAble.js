import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./News'),
  loading() {
  	return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>