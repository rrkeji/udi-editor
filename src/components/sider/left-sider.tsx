import React, { useState } from 'react';
import { appWindow } from '@tauri-apps/api/window';
import { Button, Collapse, Tooltip, Divider } from 'antd';
import {
  CaretDownOutlined,
  CaretRightOutlined,
  EllipsisOutlined,
  CustomerServiceOutlined,
  SoundOutlined,
  VideoCameraOutlined,
  PlaySquareOutlined,
  FilePdfOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';

import styles from './left-sider.less';

const { Panel } = Collapse;

const itemGroups = (list: Array<any>, key: string): any => {
  return list.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const GRADE_NAMES = ['托班', '小班', '中班', '大班'];

export interface CategoryItemEntity {
  classId: number;
  clazzName: string;
  icon: any;
  gradeName: string;
}

export const LeftSider = (props: {
  className?: string;
  value: number | null;
  onChange: (value: number | null) => void;
}) => {
  //students

  let cls_student = itemGroups([], 'gradeName');

  console.log(cls_student, '======');

  return (
    <div className={classnames(props.className, styles.container)}>
      <div>
        {GRADE_NAMES.map((item, index) => {
          return (
            <GroupItem
              title={item}
              value={props.value}
              items={cls_student[item]}
              itemClick={(value) => {
                props.onChange(value);
              }}
            ></GroupItem>
          );
        })}
      </div>
      <div>&nbsp;</div>
    </div>
  );
};

const GroupItem = (props: {
  className?: string;
  title: any;
  value: number | null;
  items?: Array<CategoryItemEntity>;
  itemClick?: (index: number) => void;
  children?: any;
}) => {
  const [expand, setExpand] = useState<boolean>(true);

  return (
    <div className={classnames(props.className, styles.group_item)}>
      <div
        className={classnames(styles.category_item, styles.group_title)}
        onClick={(e) => {
          setExpand(!expand);
          e && e.preventDefault && e.preventDefault();
          return false;
        }}
      >
        <div className={styles.icon}>
          {expand ? <CaretDownOutlined /> : <CaretRightOutlined />}
        </div>
        <div className={styles.title}>{props.title}</div>
      </div>
      {expand &&
        props.items &&
        props.items.length > 0 &&
        props.items.map((item, index) => {
          return (
            <CategoryItem
              className={classnames(
                item.classId == props.value ? styles.selected : undefined,
              )}
              categoryIndex={index}
              key={item.classId}
              title={item.clazzName}
              icon={<SolutionOutlined />}
              onClick={() => {
                props.itemClick && props.itemClick(item.classId);
              }}
            ></CategoryItem>
          );
        })}
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

export default LeftSider;
