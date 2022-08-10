import type { ProColumns } from '@ant-design/pro-components';
import {
    EditableProTable,
    ProCard,
    ProFormField,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getLocalValueByDefault } from '@/utils/utils';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import { getList, update, insert, remove } from '@/services/pagemgr-draft-service';
import { appWindow, getCurrent, WebviewWindow } from "@tauri-apps/api/window";

type DataSourceType = {
    id: React.Key;
    name: string;
    labels: string;
    schema: string;
    description: string;
};

export const PageMgrDraft = (props: any) => {

    const navigate = useNavigate();

    const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);

    const [dataSource, setDataSource] = useState<DataSourceType[]>([]);

    const columns: ProColumns<DataSourceType>[] = [
        {
            title: '页面名称',
            dataIndex: 'name',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        whitespace: true,
                        message: '此项是必填项',
                    },
                    {
                        max: 64,
                        whitespace: true,
                        message: '最长为 64 位',
                    },
                    {
                        min: 1,
                        whitespace: true,
                        message: '最小为 1 位',
                    },
                ],
            },
        },
        {
            title: '标签',
            dataIndex: 'labels',
        },
        {
            title: 'schema',
            dataIndex: 'schema',
        },
        {
            title: 'description',
            dataIndex: 'description',
        },
        {
            title: '操作',
            valueType: 'option',
            width: 260,
            render: (text, record, _, action) => {
                return [
                    <a
                        key="editable"
                        onClick={() => {
                            action?.startEditable?.(record.id);
                        }}
                    >
                        编辑
                    </a>,
                    <a
                        key="editor"
                        onClick={() => {
                            //
                            // navigate(`/app/editor/${record.id}`);
                            try {
                                let editorWindow = new WebviewWindow(`editorWindows_${record.id}`, {
                                    url: 'editor.html',
                                    height: 1024,
                                    width: 768,
                                    maximized: true,
                                    title: 'UDI编辑器'
                                });
                                editorWindow.show();
                            } catch (error) {
                                console.log("没有windows111");
                            }
                        }}
                    >
                        编辑页面
                    </a>,
                    <a
                        key="editorPreview"
                        onClick={() => {
                            //
                            // navigate(`/app/editor/${record.id}`);
                            try {
                                let editorWindow = new WebviewWindow(`editorPreviewWindows_${record.id}`, {
                                    url: 'preview.html',
                                    height: 1024,
                                    width: 768,
                                    maximized: true,
                                    title: 'UDI编辑器预览'
                                });
                                editorWindow.show();
                            } catch (error) {
                                console.log("没有windows111");
                            }
                        }}
                    >
                        预览页面
                    </a>,
                    <a
                        key="delete"
                        onClick={() => {
                            //删除
                            const call = async () => {
                                await remove(parseInt(record.id + ''));
                                let res = await getList();
                                setDataSource(res);
                            };
                            call();
                        }}
                    >
                        删除
                    </a>,
                ];
            },
        },
    ];

    useEffect(() => {
        const call = async () => {
            let res = await getList();
            console.log(res);
            setDataSource(res);
        };
        call();
    }, []);

    return (
        <div className={styles.container}>
            <EditableProTable<DataSourceType>
                headerTitle={'页面草稿'}
                columns={columns}
                rowKey="id"
                value={dataSource}
                onChange={setDataSource}
                recordCreatorProps={{
                    position: 'top',
                    newRecordType: 'dataSource',
                    record: () => ({
                        id: -1 * new Date().getTime(),
                        name: '',
                        labels: '',
                        schema: '',
                        description: ''
                    }),
                }}
                toolBarRender={() => {
                    return [];
                }}
                editable={{
                    type: 'multiple',
                    editableKeys,
                    onValuesChange: (record, recordList) => {
                        console.log(record, 'onValuesChange');
                    },
                    onSave: async (rowKey, data, row) => {
                        console.log(rowKey, data, row, 'onSave');
                        // await waitTime(2000);
                        if (rowKey < 0) {
                            //添加
                            await insert({
                                ':name': data['name'],
                                ':labels': data['labels'],
                                ':schema': data['schema'],
                                ':description': data['description'],
                            });

                            let res = await getList();
                            setDataSource(res);
                        } else {
                            //修改
                            await update(parseInt(rowKey + ''), {
                                ':name': data['name'],
                                ':labels': data['labels'],
                                ':schema': data['schema'],
                                ':description': data['description'],
                            });
                        }
                    },
                    onChange: setEditableRowKeys,
                }}
            />
        </div>
    );
};

export default PageMgrDraft;
