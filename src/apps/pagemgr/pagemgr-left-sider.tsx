import React, { useState } from 'react';
import { appWindow } from '@tauri-apps/api/window';
import { Button, Collapse, Tooltip, Divider } from 'antd';
import {
  SoundOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';

import { useNavigate } from 'react-router-dom';

import styles from './pagemgr-left-sider.module.less';

const ALL_ITEMS = [
  {
    title: '草稿页面',
    path: '/app/pagemgr/draft',
    icon: <SoundOutlined />,
  },
  {},
  {
    title: '发布页面',
    path: '/app/pagemgr/published',
    icon: <SoundOutlined />,
  }
];

export const PageMgrLeftSider = (props: { className?: string }) => {

  const navigate = useNavigate();

  const [category, setCategory] = useState<string>('');
  //students
  return (
    <div className={classnames(props.className, styles.container)}>
      <div className={classnames(styles.group_item)}>
        {ALL_ITEMS.map((item, index) => {
          if (!item.title || item.title == '') {
            return (
              <Divider
                className={classnames(styles.divider)}
                key={index}
              ></Divider>
            );
          } else {
            return (
              <CategoryItem
                className={classnames(
                  item.title == category ? styles.selected : undefined,
                )}
                categoryIndex={index}
                key={item.title}
                title={item.title}
                icon={item.icon}
                onClick={() => {
                  setCategory(item.title);
                  navigate(item.path);
                }}
              ></CategoryItem>
            );
          }
        })}
      </div>
      <div>&nbsp;</div>
    </div>
  );
};

const CategoryItem = (props: {
  className?: string;
  categoryIndex: number;
  title?: any;
  icon?: any;
  onClick?: (index: number, item: any) => void;
}) => {
  return (
    <div
      className={classnames(props.className, styles.category_item)}
      onClick={() => {
        props.onClick && props.onClick(props.categoryIndex, props);
      }}
    >
      {!!props.icon ? <div className={styles.icon}>{props.icon}</div> : ''}
      {!!props.title ? <div className={styles.title}>{props.title}</div> : ''}
    </div>
  );
};

export default PageMgrLeftSider;
