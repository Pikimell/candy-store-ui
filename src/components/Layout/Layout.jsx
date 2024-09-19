import style from './Layout.module.css';
import { Suspense, useState } from 'react';
import Header from '../Header/Header';
import { Flex } from 'antd';

const Layout = ({ children }) => {
  return (
    <Flex className={style.layout} align="center" justify="flex-start" vertical>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </Flex>
  );
};

export default Layout;
