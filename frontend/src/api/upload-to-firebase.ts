import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

let imageUrl:string;

function setImageUrl(url:string):void{
    imageUrl = url;
}

export default async function uploadFile(file:File):Promise<string>{

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask;

    const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
    setImageUrl(downloadUrl)
    
    console.log(imageUrl)
    if (imageUrl != null){
        alert("Imagem adicionada!");
    }

    return imageUrl;

} 

