import React, { useEffect, useState } from 'react';
import { Button, Input, message } from 'antd';
const { TextArea } = Input;
import { invoke } from '@tauri-apps/api/tauri';
import { useNavigate } from 'react-router-dom';
import {
  isImported,
  isLogin,
  isOnline,
  loginByPassword,
  importAndLogin,
} from '@/services/account-service';
import { LoginHeader } from '@/components';

import styles from './index.module.less';
import rect_logo from '@/assets/runnerc_rect.png';
import UDI_LOGO from '@/assets/udi_logo_256.png';

import LoginByPasswordPanel from './login';
import ImportAndLoginPanel from './import-and-login';

export default (props: any) => {

  const navigate = useNavigate();

  const [imported, setImported] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    //判断是否已经导入账号
    const call = async () => {
      let islogin = await isLogin();
      if (islogin) {
        //跳转
        navigate('/app');
        return;
      }
      let res = await isImported();
      setImported(res);
    };
    call();
  }, []);

  return (
    <>
      <LoginHeader></LoginHeader>
      <div className={styles.container}>
        <div className={styles.login_panel}>
          <div className={styles.logo}>
            <img src={UDI_LOGO}></img>
            <div className={styles.title}>无敌编辑器</div>
          </div>
          {imported ? (
            <LoginByPasswordPanel
              className={styles.form}
            ></LoginByPasswordPanel>
          ) : (
            <ImportAndLoginPanel className={styles.form}></ImportAndLoginPanel>
          )}
        </div>
      </div>
    </>
  );
};
