import { palette } from "../constants/colors";
import { documentTypes } from "../constants/global.constant";

export const getColorByDocumentType = (documentType) => {
  let color;
  switch (documentType) {
    case documentTypes.Simple:
      color = palette.primary;
      break;
    case documentTypes.Custom:
      color = palette.secondary;
      break;
    default:
      color = palette.tertiary;
      break;
  }
  return color;
};

export const getDocumentsUrl = (limit, page, documentType) => {
  let url;
  const type = documentType;
  if(type && type !== documentTypes.All){
    url = `?_page=${page}&&_limit=${limit}&&type=${type}`;
  } else {
    url = `?_page=${page}&&_limit=${limit}`;
  }
  return url;
}

export const getNewFormData = (formData, type, initUrl) => {
  const data = {...formData};
  switch (type) {
    case documentTypes.Simple:
      delete data?.text;
      delete data?.image;
      return data;
    case documentTypes.Custom:
      delete data?.image;
      return data;
    default:
      data.image = initUrl;
      return data;
  }
}