const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categoriesReducer = (state = [], action) => {
  if (action.type === CHECK_STATUS) {
    return 'UNDER CONSTRUCTION';
  }
  return state;
};

export const statusAction = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;