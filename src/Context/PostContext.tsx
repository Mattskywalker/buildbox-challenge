import { createContext, ReactNode, useEffect, useState } from "react";
import { json } from "stream/consumers";
import { savePostToFirebase } from "../api";
import { PostModel } from "../Interfaces/PostInterfaces";

interface PostContextInitialValue {
  savePost(post: PostModel, image?: File): void,
  removePost(post: PostModel): void,
  getPosts(): PostModel[]
}

export const PostContext = createContext({} as PostContextInitialValue);

interface PostProviderProps {
  children: ReactNode
}

const LOCAL_STORAGE_KEY = 'POST_KEY';

export default function PostProvider({ children }: PostProviderProps) {

  const [posts, setPosts] = useState<PostModel[]>([])

  async function fetchPosts() {
    const stringResult = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!stringResult) { return }

    setPosts(JSON.parse(stringResult));
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  async function savePost(post: PostModel, image?: File) {
    let result = getPost(post.id);
    // setPosts([...posts, {...post, id: result?.id || new Date().getTime().toString()}]);
    const postUpdated = {
      ...post,
      id: result?.id || new Date().getTime().toString()
    }

    await savePostToFirebase(postUpdated, image)
      .then(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,
          JSON.stringify([...getPosts(), postUpdated]))
        fetchPosts()
      })
  }

  function getPost(id?: string) {
    if (!id) { return }
    const postResult = getPosts();

    return postResult.filter(post => post.id === id).shift();
  }

  function getPosts() {
    const postResult = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!postResult) { return [] }

    return JSON.parse(postResult) as PostModel[];
  }

  function removePost(post: PostModel) {
    localStorage.setItem(LOCAL_STORAGE_KEY,
      JSON.stringify(getPosts().filter((postData) => postData.id != post.id)));
    fetchPosts();
  }

  return (
    <PostContext.Provider value={{ savePost, getPosts, removePost }} >
      {children}
    </PostContext.Provider>
  )
}