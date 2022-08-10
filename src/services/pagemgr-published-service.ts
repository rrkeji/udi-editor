import {
  databaseQuery,
  databaseQueryMap,
  databaseUpdate,
  databaseUpdateWithArgs,
} from './idns-request';

export const getList = async (): Promise<Array<any>> => {
  let res = await databaseQueryMap(
    'SELECT c.id, c.name, c.labels, c.schema, c.description, c.ctime, c.page_cid FROM udi_editor_pagemgr_published c where c.status = 1  order by c.id',
    7,
    (item: any) => {
      return {
        id: item[0],
        name: item[1],
        labels: item[2],
        schema: item[3],
        description: item[4],
        ctime: item[5],
        page_cid: item[6],
      };
    },
  );
  return res as any;
};

export const update = async (
  id: number,
  args: { [key: string]: any },
): Promise<boolean> => {
  let res = await databaseUpdateWithArgs(
    `update udi_editor_pagemgr_published set name = :name, labels = :labels,schema = :schema, description = :description   where id = ${id} `,
    args,
  );
  return true;
};

export const insert = async (args: {
  [key: string]: any;
}): Promise<boolean> => {
  let res = await databaseUpdateWithArgs(
    `insert into udi_editor_pagemgr_published(name,labels,schema, description) VALUES (:name, :labels,:schema, :description) `,
    args,
  );
  return true;
};

export const remove = async (id: number) => {
  await databaseUpdate(
    `update udi_editor_pagemgr_published set status = 0 where id = ${id}`,
  );
  return true;
};
