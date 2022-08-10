import React, { useEffect, useState } from 'react';
import { Button, Input, message } from 'antd';
const { TextArea } = Input;
import { invoke } from '@tauri-apps/api/tauri';
import {
  isImported,
  isLogin,
  isOnline,
  loginByPassword,
  importAndLogin,
  generateAccount,
} from '@/services/account-service';
import { LoginHeader } from '@/components';
import { useNavigate } from 'react-router-dom';
import styles from './import-and-login.module.less';
import rect_logo from '@/assets/runnerc_rect.png';
import UDI_LOGO from '@/assets/udi_logo_256.png';

import { setLocalValue } from '@/utils';
import classnames from 'classnames';

export default (props: { className?: string }) => {

  const navigate = useNavigate();

  const [phrase, setphrase] = useState<string>(
    'rude slim service century shoulder expire toy shed word coyote under expect',
  );

  const [password, setPassword] = useState<string>('');

  const [password2, setPassword2] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    //判断是否已经导入账号
  }, []);

  return (
    <div className={classnames(props.className, styles.container)}>
      <div className={styles.label}>
        请你输入助记词(12)，如果没有点击生成属于你自己的助记词。
      </div>
      <div className={styles.item}>
        <TextArea
          placeholder="请你输入助记词(12)，如果没有点击生成属于你自己的助记词。"
          value={phrase}
          onChange={(e: any) => {
            setphrase(e.target.value);
          }}
          rows={2}
          className={styles.input}
        ></TextArea>
        <div className={styles.generateButton}>
          <div
            className={styles.tip}
            onClick={() => {
              const call = async () => {
                let res = await generateAccount();
                if (res != null) {
                  setphrase(res.getSecretPhrase());
                } else {
                  message.error('生成失败，请重试!');
                }
              };
              call();
            }}
          >
            <span
              style={{
                fontSize: '12px',
                textDecoration: 'underline',
              }}
            >
              生成助记词!
            </span>
          </div>
        </div>
      </div>
      <div className={styles.label}>密码</div>
      <div>
        <Input.Password
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input.Password>
      </div>
      <div className={styles.label}>密码确认</div>
      <div>
        <Input.Password
          value={password2}
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
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
            //校验
            if (!password || password.trim() == '') {
              message.error('密码必须填写!');
              return;
            }
            if (!phrase || phrase.trim() == '') {
              message.error('助记词必须填写!');
              return;
            }
            if (password != password2) {
              message.error('密码和密码确认必须一致!');
              return;
            }
            console.log(phrase);
            //验证DID是否合法
            setLoading(true);
            const call = async () => {
              try {
                let res = await importAndLogin(password, phrase);
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
                  message.error('登录失败,请检测did是否正确！');
                  setLoading(false);
                }
              } catch (error) {
                setLoading(false);
              }
            };
            call();
          }}
        >
          导入并登录
        </Button>
      </div>
    </div>
  );
};
