import { useEffect } from "react";
import "./dashboard.scss";
import "./dashboard_responsive.scss";
import { useSelector } from "react-redux";
import { getLS } from "../../redux/localStorageSlice/slice";

export const Dashboard = () => {
  const ls = useSelector(getLS);
  return (
    <div className="dashboard">
      <p>Veículos salvos:</p>
      {ls.length > 0 ? (
        ls.map((element, index) => {
          return (
            <div
              className="card-dashboard"
              key={index}
              style={{ "--valor": `"${element.valor}"` }}
            >
              <span>Tipo: {element.veiculo}</span>
              <span>Marca: {element.marcas}</span>
              <span>Modelo: {element.modelos}</span>
              <span>Ano: {element.anos}</span>
            </div>
          );
        })
      ) : (
        <p>Você ainda não tem itens salvos!</p>
      )}
    </div>
  );
};
