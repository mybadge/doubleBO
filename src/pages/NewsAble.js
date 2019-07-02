import React from 'react';
import Loadable from 'react-loadable';
import LoadingView from './Base/LoadingView';

const LoadableComponent = Loadable({
  loader: () => import('./News'),
  loading() {
  	return <LoadingView />
  }
});

export default () => <LoadableComponent/>