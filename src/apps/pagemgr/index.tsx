import React, { useState, useEffect, useCallback } from 'react';
import { PageMgrLeftSider } from './pagemgr-left-sider';
import { HashRouter, Route, Routes, Outlet, Link } from "react-router-dom"
import classnames from 'classnames';
import styles from './index.module.less';
import { setLocalValue } from '@/utils';

export const PageMgr = (props: any) => {
    useEffect(() => {
        const call = async () => {

        };
        call();
    }, []);

    return (
        <div className={classnames(styles.content)}>
            <PageMgrLeftSider className={classnames(styles.sider)}></PageMgrLeftSider>
            <div className={classnames(styles.center)}>
                <Outlet />
            </div>
        </div>
    );
};

export default PageMgr;
