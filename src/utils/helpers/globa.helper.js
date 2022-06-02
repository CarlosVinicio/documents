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
