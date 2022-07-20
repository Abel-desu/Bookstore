const Add = 'Bookstore/books/Add';
const Remove = 'bookstrore/books/Remove';

// Reducer
const bookReducer = (state = [], action) => {
  if (action.type === Add) {
    return [
      ...state,
      {
        id: action.id,
        Bookname: action.title,
        author: action.author,
      },
    ];
  }
  if (action.type === Remove) {
    return state.filter((item) => item.id !== action.id);
  }
  return state;
};
export const addingAction = ({ id, title, author }) => ({
  type: Add,
  id,
  title,
  author,
});
export const removingAction = ({ id }) => ({
  type: Remove,
  id,
});
export default bookReducer;
