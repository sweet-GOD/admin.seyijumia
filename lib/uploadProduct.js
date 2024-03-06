import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

export const uploadProduct = async ({
  title,
  price,
  category,
  brand,
  description,
  features,
  specifications,
  units,
  deliveryMethod,
  deliveryPrice,
  images,
}) => {
  // Put the image in the  /creator email/ Project Name / image
  const imageRef = ref(
    storage,
    `${title + brand}/${brand}/${images.name}`
  );
  const status = await uploadBytes(imageRef, images)
    .then((snapshot) => {
      return snapshot;
    })
    .catch((error) => {
      return false;
    });

  // if their  was error  in uploading, return
  if (!status) return false;

  // gets the image URl stored in Firebases storage
  const uploadImgUrl = await getDownloadURL(status.ref).then((url) => {
    return url;
  });

  // Submit Data
  const productsCollectionRef = collection(db, "products");
  try {
    await addDoc(productsCollectionRef, {
      images: uploadImgUrl,
      title,
      price,
      category,
      brand,
      description,
      features,
      specifications,
      units,
      deliveryMethod,
      deliveryPrice,
    });
  } catch (error) {
    return false;
  }

  return true;
};
