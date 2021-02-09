import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';
import 'antd/dist/antd.css';

function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>패브 마스터</title>
      </Head>
      <Component />
    </>
  )
}
export default App;