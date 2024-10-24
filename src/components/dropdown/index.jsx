import { useContext, useEffect, useState } from "react";
import "./dropdown.scss";
import "./dropdown_responsive.scss";
import { useDispatch, useSelector } from "react-redux";
import { getState, uploadUrl, uploadValue } from "../../redux/configSlice/slice";

export const Dropdown = ({id, options }) => {
  
  const dispatch = useDispatch()
  const optionsObject = useSelector(getState)
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggle_isActive = () => {
    const body = document.querySelector("body")
    setIsActive(!isActive);

    if(body.classList.contains("activeBody")){
      body.classList.remove("activeBody")
    }else{
      body.classList.add("activeBody")
    }
  } 
  
  const handleSelect = (option, index) => {
    dispatch(uploadValue({
      index: index,
      value: option.nome
    }))

    dispatch(uploadUrl({
      key: optionsObject[index].name,
      value: option.codigo
    }))

    toggle_isActive()
    setSelectedOption(option.nome);
  };

  return (
    
      <div className={`dropdown ${isActive ? "active" : ""}`}>
        <button onClick={toggle_isActive}>
          <span>
            {selectedOption ? selectedOption : "Selecione uma opção..."}
          </span>
        </button>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option, index) => {
              return (
                <a onClick={() => handleSelect(option, id)} key={index}>
                  {option.nome? option.nome : option}
                </a>
              );
            })}
          </div>
        )}
      </div>
    
  );
};
