const initial = {

}

const rootReducer = (state = initial, action) => {
  switch (action.type) {
    case 'NAME_TO_HEADER':
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
}
export default rootReducer
