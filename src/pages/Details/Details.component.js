import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Components
import { Chip } from "../../components/Chip/Chip.component";
//Styles
import { DetailsStyled } from "./Details.styled";
// Services
import { getDocumentDetails } from "../../api/services/global.service";
//Constants
import { documentTypes } from "../../utils/constants/global.constant";
//Utils
import { getColorByDocumentType } from "../../utils/helpers/globa.helper";

const styledChip = { width: "100px" };

export const Details = () => {
  const [detail, setDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    getDocumentDetails(id).then((response) => {
      setDetail(response);
    });
  }, []);

  return (
    <DetailsStyled type={detail?.type}>
      <div className="details_header">
        <div className="details__title">{detail?.title}</div>
        <div>
          <Chip
            name={detail?.type}
            color={detail?.type && getColorByDocumentType(detail?.type)}
            styled={styledChip}
          />
        </div>
      </div>
      <div className="details__body">
        {detail?.type === documentTypes.Advanced && (
          <div className="details_type">
            <img src={detail?.image} alt="no-img" />
          </div>
        )}

        <div className="details__data">
          <div>
            <div className="details__label">Date: </div>
            <div className="details__date">{detail?.date}</div>
          </div>
          {(detail?.type === documentTypes.Advanced ||
            detail?.type === documentTypes.Custom) && (
            <div>
              <div className="details__label">Text: </div>
              <div className="details__text">{detail?.text}</div>
            </div>
          )}
        </div>
      </div>
    </DetailsStyled>
  );
};
