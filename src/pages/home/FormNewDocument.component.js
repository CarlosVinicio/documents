import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button.component";
import { Selector } from "../../components/selector/Selector.component";
import { documentTypes } from "../../utils/constants/global.constant";
import { FormStyled } from "./FormNewDocument.styled";

export const FormNewDocument = ({ onCancel, onConfirm, docTypes }) => {
  // Crear fecha dinamica new Date
  // Imagen como enviar?

  const [formData, setFormData] = useState({type: docTypes[1].type});

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    const copyData = { ...formData };
    switch (value) {
      case "simple":
        delete copyData?.text;
        delete copyData?.image;
        setFormData({
          ...copyData,
          [name]: value,
        });
        break;
      case "custom":
        delete copyData?.image;
        setFormData({
          ...copyData,
          [name]: value,
        });
        break;
      default:
        setFormData({
          ...copyData,
          [name]: value,
        });
        break;
    }
  };

  const renderInputSelect = () => {
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
  }

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
                    <option
                      key={document.id}
                      value={document.type}
                    >
                      {document.type}
                    </option>
                  );
                })}
          </select>
        </div>
        {renderInputSelect()}
        {formData?.type === documentTypes.Advanced && (
          <div className="form__input">
            <label htmlFor="title"> Image </label>
            <input className="form__text" />
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
