
const initialState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
  like: null,
  comments:[],
  newComment:null
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
        posts: [action.payload, ...state.posts],
        error: null,
      };

    case "GET_ALL_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        comments: action.payload.comments,
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

    case "ADD_COMMMENT_SUCCESS":
      return {
        ...state,
        newComment:action.payload,
        comments: [action.payload, ...state.commments],
        loading: false,
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
