import React from 'react';
import { appWindow } from '@tauri-apps/api/window';
import { Button, Input, Tooltip } from 'antd';
import {
  ExpandAltOutlined,
  CloseOutlined,
  MinusOutlined,
} from '@ant-design/icons';

import classnames from 'classnames';

import styles from './menu-button.module.less';

export const MenuButton = (props: {
  className?: string;
  selected?: boolean;
  icon: any;
  title?: any;
  onClick?: () => void;
}) => {
  return (
    <div
      className={classnames(props.className, styles.container)}
      onClick={props.onClick}
    >
      {!!props.icon ? (
        <div
          className={classnames(styles.icon, props.selected && styles.selected)}
        >
          {props.icon}
        </div>
      ) : (
        ''
      )}
      {!!props.title ? (
        <div
          className={classnames(
            styles.title,
            props.selected && styles.selected,
          )}
        >
          {props.title}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default MenuButton;
