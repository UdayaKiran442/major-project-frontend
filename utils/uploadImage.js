import { cloudName } from "../config/cloudinary";
export default uploadImage = async (base64) => {
  const base64Img = `data:image/jpg;base64,${base64}`;
  const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  const data = {
    file: base64Img,
    upload_preset: "majorproject",
  };
  const response = fetch(apiUrl, {
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
    method: "POST",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return {
    public_id: response.public_id,
    secure_url: response.secure_url,
  };
};
