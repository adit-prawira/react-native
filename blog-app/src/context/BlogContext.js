import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "delete_blogpost":
            return state.filter((post) => {
                return post.id !== action.payload;
            });
        case "edit_blogpost":
            return state.map((post) => {
                return post.id == action.payload.id ? action.payload : post;
            });
        case "get_blogposts":
            return action.payload;
        default:
            return state;
    }
};

// Action functions
const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post("/blogposts", { title, content });
        if (callback) callback();
    };
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: "delete_blogpost", payload: id });
    };
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { id, title, content });
        dispatch({ type: "edit_blogpost", payload: { id, title, content } });
        if (callback) callback();
    };
};

const getBlogPosts = (dispatch) => {
    return async () => {
        const res = await jsonServer.get("/blogposts");
        dispatch({ type: "get_blogposts", payload: res.data });
    };
};
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);
