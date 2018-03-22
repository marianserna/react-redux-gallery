export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCHED_IMAGES':
      return {
        ...state,
        images: action.images
      };
    default:
      return state;
  }
};
