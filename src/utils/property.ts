export interface Property {
  'property.identifier': string;
  'property.type': string;
  'property.type_parameter'?: string;
  'property.is_pk'?: boolean;
  'property.default'?: string;
  'property.annotation'?: string;
  'property.options'?: string;
  'property.description'?: string;
}
// |  string  |
// |   int    |
// |  float   |
// | boolean  |
// |   date   |
// | datetime |
// |   uid    |
// |   json   |
// |   text   |
// |   html   |
// |   file   |
// | markdown |
export const BASIC_TYPES = [
  'string',
  'int',
  'float',
  'boolean',
  'date',
  'datetime',
  'uid',
  'json',
  'text',
  'html',
  'file',
  'markdown',
];
export function isBasicType(type: string) {
  //
  return BASIC_TYPES.indexOf(type) >= 0;
}

export function isArrayType(type: string) {
  //
  return type && type.lastIndexOf('[]') === type.length - 2;
}

export function getPropertyName(
  typeIdentifier: string,
  propertyIdentifier: string,
): string {
  return `${typeIdentifier}.${propertyIdentifier}`;
}

export const getTableValueType = (valueType: string) => {
  if (valueType == 'int') {
    return 'digit';
  } else if (valueType == 'string') {
    return 'text';
  } else if (valueType == 'json') {
    return 'text';
  } else if (valueType == 'html') {
    return 'text';
  } else if (valueType == 'text') {
    return 'text';
  } else if (valueType == 'uid') {
    return 'text';
  } else if (valueType == 'markdown') {
    return 'text';
  } else if (valueType == 'float') {
    return 'digit';
  }
  return '';
};
