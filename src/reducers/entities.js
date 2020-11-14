import merge from 'deepmerge';
import defaultReducers from './default-reducers';

export default (
  state = {
    ...defaultReducers,
  },
  action,
) => {
  if (action.response && action.response.entities) {
    return merge.all([state, action.response.entities], {
      clone: false,
      arrayMerge: (destinationArray, sourceArray) =>
        sourceArray.includes('mergeWithOld')
          ? sourceArray.pop() && [...destinationArray, ...sourceArray]
          : sourceArray,
    });
  }

  return state;
};
