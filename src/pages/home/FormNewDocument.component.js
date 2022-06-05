import React, { useState } from "react";
import { Button } from "../../components/Button/Button.component";
import {
  documentTypes,
  imagesUrlMock,
} from "../../utils/constants/global.constant";
import { getNewFormData } from "../../utils/helpers/globa.helper";
import { FormStyled } from "./FormNewDocument.styled";

export const FormNewDocument = ({ onCancel, onConfirm, docTypes }) => {
  const [formData, setFormData] = useState({ type: docTypes[1].type });

  const onChangeForm = async (e) => {
    const { name, value } = e.target;
    const copyData = { ...formData };

    if (name === "type") {
      const data = getNewFormData(formData, value, imagesUrlMock[0].url);
      setFormData({
        ...data,
        [name]: value,
      });
    } else {
      setFormData({
        ...copyData,
        [name]: value,
      });
    }
  };

  const renderInputText = () => {
    if (
      formData?.type === documentTypes.Custom ||
      formData?.type === documentTypes.Advanced
    ) {
      return (
        <div className="form__input">
          <label htmlFor="title"> Text </label>
          <input className="form__text" name="text" onChange={onChangeForm} />
        </div>
      );
    }
  };

  const confirmDocument = () => {
    onConfirm(formData);
  };

  return (
    <FormStyled>
      <div>
        <div className="form__input">
          <label htmlFor="title"> Title </label>
          <input
            className="form__text"
            id="title"
            name="title"
            onChange={onChangeForm}
          />
        </div>
        <div className="form__input">
          <label htmlFor="docTypes"> Document type </label>
          <select
            name="type"
            id="docTypes"
            className="form__text"
            onChange={(e) => onChangeForm(e)}
          >
            {docTypes &&
              docTypes
                .filter((document) => document.type !== "All")
                .map((document) => {
                  return (
                    <option key={document.id} value={document.type}>
                      {document.type}
                    </option>
                  );
                })}
          </select>
        </div>
        {renderInputText()}
        {formData?.type === documentTypes.Advanced && (
          <div className="form__input">
            <label htmlFor="img"> Image </label>
            <select
              name="image"
              id="img"
              className="form__text"
              onChange={(e) => onChangeForm(e)}
            >
              {imagesUrlMock &&
                imagesUrlMock.map((image) => {
                  return (
                    <option key={image.id} value={image.url}>
                      {image.name}
                    </option>
                  );
                })}
            </select>
          </div>
        )}

        <div className="form__input">
          <label htmlFor="title"> Date </label>
          <input
            type="date"
            className="form__text"
            name="date"
            onChange={onChangeForm}
          />
        </div>
      </div>
      <div className="form__footer">
        <Button handleClickButton={onCancel} title="Cancel" />
        <Button handleClickButton={confirmDocument} title="Confirm" />
      </div>
    </FormStyled>
  );
};
