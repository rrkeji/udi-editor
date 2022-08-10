import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './left-sider.less';
export interface CategoryItemEntity {
  title: string;
  icon: any;
  category: string;
}

export const LeftSider = (props: {
  className?: string;
  items?: Array<CategoryItemEntity>;
  onChange?: (value: any) => void;
}) => {
  const [category, setCategory] = useState<number>(-1);

  return (
    <div className={classnames(props.className, styles.container)}>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <CategoryItem
              className={classnames(
                index == category ? styles.selected : undefined,
              )}
              categoryIndex={index}
              key={index}
              title={item.title}
              icon={item.icon}
              onClick={(categoryIndex) => {
                setCategory(categoryIndex);
                props.onChange && props.onChange(categoryIndex);
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
