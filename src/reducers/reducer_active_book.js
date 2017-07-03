// the state in this function is only responsible for the components statennnmn  n
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
      break;
  }

  return state
}
