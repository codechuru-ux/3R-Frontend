import { BASE_URL } from "../components/form/api";


export const encodeFilePath = (filePath) => {
  if (!filePath) return '';
  
  const path = Array.isArray(filePath) ? filePath[0] : filePath;

  if (!path) return '';

  let cleanPath = String(path).replace(/^public\/uploads\//, '');
  
 
  return encodeURI(cleanPath);
};

export const getThumbnailUrl = (thumbnailPath) => {
  if (!thumbnailPath) return '';
  
  const encodedPath = encodeFilePath(thumbnailPath);
  return `${BASE_URL}/public/uploads/${encodedPath}`;
};

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  
  const encodedPath = encodeFilePath(imagePath);
  return `${BASE_URL}/public/uploads/${encodedPath}`;
};
