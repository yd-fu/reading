const _ = require('lodash');

export const getArticleList = list => (_.isEmpty(list) ? [] : removeExpiredItem(list));

export const removeExpiredItem = (list) => {
  _.remove(list, item => item.expire);
  return list || [];
};

export const getTypeName = (typeList, typeId) =>
  _.head(_.filter(typeList, o => o.id === typeId.toString())).name;

export const isNotEmpty = list => !_.isEmpty(list);
