import React, { useState } from 'react';
import { appWindow } from '@tauri-apps/api/window';
import { Button, Input, Divider } from 'antd';
import {
  InboxOutlined,
  LaptopOutlined,
  WechatOutlined,
  GlobalOutlined,
  RedditOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { MenuButton } from './menu-button';

import styles from './menu-bar.module.less';

export const MenuBar = (props: { className?: string }) => {

  const navigate = useNavigate();

  const [selected, setSelected] = useState<string>('');

  return (
    <div
      data-tauri-drag-region
      className={classnames(props.className, styles.container)}
    >
      <div data-tauri-drag-region>
        <MenuButton
          title={'页面管理'}
          selected={selected == '页面管理'}
          icon={<InboxOutlined />}
          onClick={() => {
            setSelected('页面管理');
            navigate('/app/pagemgr');
          }}
        ></MenuButton>
      </div>
      <div data-tauri-drag-region>
        <MenuButton
          title={'园所管理'}
          selected={selected == '园所管理'}
          icon={<RedditOutlined />}
          onClick={() => {
            setSelected('园所管理');
            navigate('/app/garten');
          }}
        ></MenuButton>
        <MenuButton
          title={'设置'}
          selected={selected == '设置'}
          icon={<SettingOutlined />}
          onClick={() => {
            setSelected('设置');
            navigate('/app/settings');
          }}
        ></MenuButton>
      </div>
    </div>
  );
};

export default MenuBar;
