import { useDispatch, useSelector } from "react-redux";
import icon from "./assets/disquete.png";
import "./saveButton.scss";
import { getState } from "../../redux/configSlice/slice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { uploadLS } from "../../redux/localStorageSlice/slice";

export const SaveButton = () => {
  const options = useSelector(getState);
  const dispatch = useDispatch()
  const [valor, setValor] = useState();
  
  const handleSave = () => {
    const saveElement = options.reduce((initialValue, item) => {
      initialValue[item.name] = item.value;
      return initialValue;
    }, {});
    dispatch(uploadLS(saveElement));
    toast.success("Veículo salvo com sucesso!")
  };
  
  useEffect(() => {
    options.map((element) => {
      if (element.name == "valor") {
        if (element.value) {
          setValor(element.value);
        } else {
          setValor();
        }
      }
    });
  }, [options]);

  return (
    valor && (
      <button className="saveButton" onClick={handleSave}>
        <img src={icon} />
      </button>
    )
  );
};
