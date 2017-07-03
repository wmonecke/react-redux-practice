export function selectBook (book) {
  // selectBook is an ActionCreator, it needs to return an actions
  // and and object with a type prop
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
