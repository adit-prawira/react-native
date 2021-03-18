import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
const styles = StyleSheet.create({});
const EditScreen = ({ navigation }) => {
    const { state, addBlogPost } = useContext(Context);
    const currentPost = state.find(
        (post) => post.id === navigation.getParam("id")
    );
    return (
        <BlogPostForm
            initialValues={{
                title: currentPost.title,
                content: currentPost.content,
            }}
            onSubmit={(title, content) =>
                addBlogPost(title, content, () => navigation.navigate("Index"))
            }
        />
    );
};

export default EditScreen;
