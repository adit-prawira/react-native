import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
const styles = StyleSheet.create({});
const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam("id");
    const currentPost = state.find((post) => post.id === id);
    return (
        <BlogPostForm
            initialValues={{
                title: currentPost.title,
                content: currentPost.content,
            }}
            onSubmit={(title, content) =>
                editBlogPost(id, title, content, () => navigation.pop())
            }
        />
    );
};

export default EditScreen;
