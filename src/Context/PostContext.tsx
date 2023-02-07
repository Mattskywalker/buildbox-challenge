import { createContext, ReactNode, useState } from "react";
import { PostModel } from "../Interfaces/PostInterfaces";

interface PostContextInitialValue {
  savePost(post: PostModel): void,
  removePost(post: PostModel): void,
  getPosts(): PostModel[]
}

export const PostContext = createContext({} as PostContextInitialValue);

interface PostProviderProps {
  children: ReactNode
}

export default function PostProvider({ children }: PostProviderProps) {

  const [posts, setPosts] = useState<PostModel[]>([])

  function savePost(post: PostModel) {
    let result = getPost(post.id);

    setPosts([...posts, {...post, id: result?.id || new Date().getTime().toString()}]);

  }

  function getPost(id?: string) {
    if(!id) {return}
    return posts.filter(post => post.id === id).shift();
  }

  function getPosts() {
    return posts;
  }

  function removePost(post: PostModel) {
    setPosts(posts.filter((postData) => postData.id != post.id))
  }

  return (
    <PostContext.Provider value={{ savePost, getPosts, removePost }} >
      {children}
    </PostContext.Provider>
  )
}