import { cloudName } from "../config/cloudinary";
export default uploadImage = async (base64) => {
  const base64Img = `data:image/jpg;base64,${base64}`;
  const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  const data = {
    file: base64Img,
    upload_preset: "majorproject1",
  };
  return fetch(apiUrl, {
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
    method: "POST",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
