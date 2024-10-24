import "./App.scss";
import { Dropdown } from "./components/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getState, getUrl } from "./redux/configSlice/slice";
import { useEffect } from "react";
import handleAPI from "./services/handleAPI";
import { CarAnimation } from "./components/carAnimation";
import { SaveButton } from "./components/saveButton";
import { Dashboard } from "./components/dashboard";
import logo from "./assets/Logo.png";

function App() {
  const dispatch = useDispatch();
  const options = useSelector(getState);
  const url = useSelector(getUrl);

  useEffect(() => {
    handleAPI(options, url, dispatch);
  }, [options]);

  return (
    <div className="container-home">
      <SaveButton />
      <CarAnimation />
      <div className="container-dropdown">
        {options.map((element, index) => {
          return (
            element.optionsArray && (
              <Dropdown key={index} id={index} options={element.optionsArray} />
            )
          );
        })}
      </div>
      <Dashboard />
      
    </div>
  );
}

export default App;
