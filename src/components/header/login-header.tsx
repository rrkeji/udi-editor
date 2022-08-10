import React from 'react';
import { appWindow } from '@tauri-apps/api/window';
import { Avatar, Input, Popover, Divider } from 'antd';
import {
  UserOutlined,
  EllipsisOutlined,
  ExpandAltOutlined,
  CloseOutlined,
  MinusOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import IDNS_PNG from '@/assets/idns_256.png';
import UDI_PNG from '@/assets/udi_logo_256.png';

import styles from './login-header.module.less';
import { clearLocalValue, logout } from '@/utils';

export const LoginHeader = (props: {
  search?: React.ReactNode;
  tools?: React.ReactNode;
}) => {
  return (
    <div data-tauri-drag-region className={styles.conatiner}>
      <div data-tauri-drag-region className={styles.left}>
        <div data-tauri-drag-region className={styles.window_butttons}>
          <div>
            <div
              className={styles.window_button}
              style={{ backgroundColor: '#FE5752' }}
              onClick={() => {
                appWindow.close();
              }}
            >
              <CloseOutlined className={styles.window_button_icon} />
              <EllipsisOutlined className={styles.window_button_icon_normal} />
            </div>

            <div
              className={styles.window_button}
              style={{ backgroundColor: '#E7BB2B' }}
              onClick={() => {
                appWindow.close();
              }}
            >
              <MinusOutlined className={styles.window_button_icon} />
              <EllipsisOutlined className={styles.window_button_icon_normal} />
            </div>
            <div
              className={styles.window_button}
              style={{ backgroundColor: '#58C024' }}
              onClick={() => {
                appWindow.close();
              }}
            >
              <ExpandAltOutlined className={styles.window_button_icon} />
              <EllipsisOutlined className={styles.window_button_icon_normal} />
            </div>
          </div>
          <div>&nbsp;</div>
        </div>
        <div data-tauri-drag-region className={styles.logo}>
          <img src={UDI_PNG} className={styles.logo_png} />
          <div className={styles.logo_title}>无敌编辑器</div>
        </div>
      </div>
      <div data-tauri-drag-region className={styles.right}>
        <div data-tauri-drag-region></div>
        <div data-tauri-drag-region className={styles.tools}></div>
      </div>
    </div>
  );
};

export default LoginHeader;
