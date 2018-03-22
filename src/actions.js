import axios from 'axios';

// action creator
const fetchImages = term => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&per_page=12&query=${term}`
      );
      // action
      dispatch({
        type: 'FETCHED_IMAGES',
        images: response.data.results
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export { fetchImages };
// normalAction = () => {
//   // do stuff
//   return {
//     type: 'FETCHED_IMAGES',
//     images: []
//   };
// };

// asyncAction = () => {
//   return dispatch => {
//     axios.get('').then(response => {
//       dispatch({
//         type: 'FETCHED_IMAGES',
//         images: response.data.results
//       });
//     });
//   };
// };

// asyncAwaitAction = () => {
//   return async dispatch => {
//     const whatever = await axios.get('url');

//     dispatch({
//       type: 'SOMETHING',
//       images: whatever.data.results
//     });
//   };
// };
