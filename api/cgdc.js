import apiInstance from ".";
import { getToken } from "../storage/storage";

export const createCGDCPostApi = async (
  content,
  link,
  category,
  public_id,
  secure_url
) =>
  apiInstance.post(
    "/posts/new-post",
    { content, link, category, public_id, secure_url },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );

export const getCGDCPostsApi = async () =>
  apiInstance.post(
    "/posts",
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export const getCGDCPostByIdApi = async (id) =>
  apiInstance.post(
    `/posts/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );

export const updateCGDCPostApi = async (
  id,
  content,
  link,
  category,
  public_id,
  secure_url
) =>
  apiInstance.post(
    `/posts/update/${id}`,
    { content, link, category, public_id, secure_url },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );

export const deleteCGDCPostApi = async (id) =>
  apiInstance.post(
    `/posts/delete/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );
