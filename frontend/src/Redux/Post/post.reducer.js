const initialState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
  like: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_POST_REQUEST":
    case "GET_ALL_POSTS_REQUEST":
    case "LIKE_POST_REQUEST":
      return { ...state, loading: false, error: null };

    case "CREATE_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.post],
        error: null,
      };

    case "GET_ALL_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null,
      };

    case "LIKE_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        like: action.payload,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        error: null,
      };

    case "CREATE_POST_FAILURE":
    case "GET_ALL_POSTS_FAILURE":
    case "LIKE_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
