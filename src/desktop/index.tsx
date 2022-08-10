import React, { useState, useCallback, useEffect } from 'react';
import { IdnsHeader, MenuBar } from '@/components';
import classnames from 'classnames';
import styles from './index.module.less';
import { HashRouter, Route, Routes, Outlet, Link } from "react-router-dom"

export default (props: any) => {
  return (
    <div className={classnames(styles.root)}>
      <IdnsHeader></IdnsHeader>
      <div className={classnames(styles.container)}>
        <MenuBar></MenuBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
