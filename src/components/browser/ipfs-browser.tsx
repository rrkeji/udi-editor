import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import styles from './ipfs-browser.less';

export const IpfsCidBrowser = (props: { className?: string; cid: string }) => {

  const [contentUrl, setContentUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    //获取HTTP的地址
    if (props.cid) {
      setContentUrl('http://localhost:8080/ipfs/' + props.cid);
    }
  }, [props.cid]);

  if (contentUrl) {
    return (
      <iframe
        className={classnames(styles.container, props.className)}
        src={
          'http://localhost:35080/apps/QmSZLq5ZrJco4SauEJs46tvjXZaayFnQ3FT54CunY9aTf9/index.html'
        }
      ></iframe>
    );
  } else {
    return <></>;
  }
};

export default IpfsCidBrowser;
