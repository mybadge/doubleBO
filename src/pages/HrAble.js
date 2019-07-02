import React from 'react';
import Loadable from 'react-loadable';
import LoadingView from './Base/LoadingView';

const LoadableComponent = Loadable({
  loader: () => import('./Hr'),
  loading() {
  	return <LoadingView />
  }
});

export default () => <LoadableComponent/>