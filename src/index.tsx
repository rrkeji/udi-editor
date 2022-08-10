import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes, Outlet, Link } from "react-router-dom"

import Login from './login/index';
import Desktop from './desktop';
import { PageMgr } from './apps/pagemgr/index';
import { PageMgrDraft } from './apps/pagemgr/draft';
import { PageMgrPublished } from './apps/pagemgr/published';

import 'antd/dist/antd.css';

import './global.scss';

export const IndexApplication = (props: any) => {

    // useEffect(() => {
    //     //登录状态判断
    //     const call = async () => {
    //         // let res = await isLogin();
    //         // if (!res && location.pathname !== '/login') {
    //         //   //跳转登录
    //         //   navigate('/login');
    //         // }
    //     };
    //     call();
    // }, [location.pathname]);

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="app" element={<Desktop />}>
                        <Route path="pagemgr" element={<PageMgr />} >
                            <Route path="draft" element={<PageMgrDraft />} />
                            <Route path="published" element={<PageMgrPublished />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};


function Layout() {
    return (
        <Outlet />
    );
}

ReactDOM.render(<IndexApplication />, document.getElementById('root'));