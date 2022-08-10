import {
  databaseQuery,
  databaseQueryMap,
  databaseUpdate,
  databaseUpdateWithArgs,
} from './idns-request';

export const getAreas = async (): Promise<Array<any>> => {
  let res = await databaseQueryMap(
    'SELECT id, name from udi_examine_area where status = 1 order by id',
    2,
    (item: any) => {
      return {
        id: item[0],
        name: item[1],
      };
    },
  );
  return res as any;
};
