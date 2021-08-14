const initial = {
  book: {
    state: "minimize"
  },
  terminal: {
    state: "minimize"
  }
}

const rootReducer = (state = initial, action) => {
  switch (action.type) {
    case 'RESIZE_BOOK':
      return {
        ...state,
        book: {
          state: action.book
        }
      }
    case 'RESIZE_TERMINAL':
      return {
        ...state,
        terminal: {
          state: action.terminal
        }
      }
    default:
      return state
  }
}
export default rootReducer
