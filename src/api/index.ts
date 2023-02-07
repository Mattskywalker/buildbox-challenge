import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { PostModel } from "../Interfaces/PostInterfaces";
import { storage } from "./firebase";


export async function savePostToFirebase(post: PostModel, image?: File) {

  const storageRef = ref(storage, post.id);

  // 'file' comes from the Blob or File API
  if(!!image) {
    await uploadBytes(ref(storage, `postImages/${post.id}`), image)
      .then( async (data) => {
        post.imageUrl = await getDownloadURL(ref(storage, data.metadata.fullPath))
      })
  }

  return post;

}