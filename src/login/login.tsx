import React, { useEffect, useState } from 'react';
import { Button, Input, message } from 'antd';
const { TextArea } = Input;
import {
  isImported,
  isLogin,
  isOnline,
  loginByPassword,
  importAndLogin,
} from '@/services/account-service';
import { useNavigate } from 'react-router-dom';

import styles from './login.module.less';

import { setLocalValue } from '@/utils';

export default (props: { className?: string }) => {

  const navigate = useNavigate();

  const [password, setPassword] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    //判断是否已经导入账号
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.label}>请输入密码</div>
      <div className={styles.item}>
        <Input.Password
          placeholder="请输入密码"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
          className={styles.input}
        ></Input.Password>
      </div>
      <div style={{ width: '100%', textAlign: 'center', paddingTop: '10px' }}>
        <Button
          style={{ width: '80%' }}
          loading={loading}
          danger
          type={'primary'}
          shape="round"
          onClick={() => {
            if (!password || password.trim() == '') {
              message.error('密码必须填写!');
              return;
            }

            //
            setLoading(true);
            const call = async () => {
              try {
                let res = await loginByPassword(password);
                //application_key, public_key, token
                console.log(res);
                if (res != null) {
                  console.log('res!', res);
                  //保存token
                  setLocalValue('idns_token', res.getToken());
                  setLocalValue('idns_public_key', res.getPublicKey());
                  setLocalValue(
                    'idns_application_key',
                    res.getApplicationKey(),
                  );
                  //登录成功
                  //
                  navigate('/app');
                  setLoading(false);
                } else {
                  message.error('登录失败,请检查密码是否输入正确!');
                  setLoading(false);
                }
              } catch (error) {
                message.error('登录失败,请检查密码是否输入正确!');
                setLoading(false);
              }
            };
            call();
          }}
        >
          登录
        </Button>
      </div>
    </div>
  );
};
