import { BASE_URL } from "../components/form/api";


export const encodeFilePath = (filePath) => {
  if (!filePath) return '';
  

  let cleanPath = filePath.replace(/^public\/uploads\//, '');
  
 
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

