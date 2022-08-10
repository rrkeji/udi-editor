import React, { useState, useEffect, useCallback } from 'react';
import {
  CaretDownOutlined,
  CaretRightOutlined,
  AppleOutlined,
  AndroidOutlined,
  SoundOutlined,
  VideoCameraOutlined,
  PlaySquareOutlined,
  FilePdfOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import { AboutPage, ThemePage } from './widgets';
import classnames from 'classnames';
import { LeftSider } from './left-sider';

import styles from './index.less';

const ALL_CATEGORIES = [
  {
    title: '传输设置',
    category: '.*image.*',
    icon: <AppleOutlined />,
  },
  {
    title: '通知设置',
    category: 'image',
    icon: <AppleOutlined />,
  },
  {
    title: '关于',
    category: 'image',
    icon: <AndroidOutlined />,
  },
];

export default (props: any) => {
  const [index, setIndex] = useState<number>(0);

  const getContent = (index: number) => {
    if (index === 0) {
      return <ThemePage></ThemePage>;
    } else {
      return <AboutPage></AboutPage>;
    }
    return <></>;
  };

  return (
    <div className={classnames(styles.content)}>
      <LeftSider
        className={classnames(styles.sider)}
        items={ALL_CATEGORIES}
        onChange={(index) => {
          setIndex(index);
        }}
      ></LeftSider>
      <div className={classnames(styles.center)}>
        <div className={classnames(styles.settings_panel)}>
          {getContent(index)}
        </div>
      </div>
    </div>
  );
};
