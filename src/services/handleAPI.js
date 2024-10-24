import {
  uploadOptions,
  uploadUrl,
  uploadValue,
} from "../redux/configSlice/slice";

export default async function handleAPI(options, url, dispatch) {


  for (let index = 0; index < options.length; index++) {
    const previousElement = options[index - 1];
    const element = options[index];
    let newURL = url.baseURL

    if (element.value == null) {
      switch (element.name) {
        case "veiculo":
          return;

        case "marcas":
          newURL = `${newURL}/${url.veiculo}/marcas`
          handleUpdates(element, newURL, dispatch, index);
        return;
  
        case "modelos":
          newURL = `${newURL}/${url.veiculo}/marcas/${url.marcas}/modelos`
          handleUpdates(element, newURL, dispatch, index);
        return;
  
        case "anos":
          newURL = `${newURL}/${url.veiculo}/marcas/${url.marcas}/modelos/${url.modelos}/anos`
          handleUpdates(element, newURL, dispatch, index);
        return;
  
        case "valor":
          newURL = `${newURL}/${url.veiculo}/marcas/${url.marcas}/modelos/${url.modelos}/anos/${url.anos}`
  
          if (element.value) return;
          const valor = await fetchFunction(newURL);
          dispatch(
            uploadValue({
              index: index,
              value: valor.Valor,
            })
          );
        return;
      
        default:
        return;
      }
    }
  }
}

async function fetchFunction(url) {
  try {
    let response = await fetch(url);
    let responseArray = await response.json();
    return responseArray;
  }catch (error) {
    console.error("Erro ao fazer a requisição:");
  }
}

const handleUpdates = async (element, url, dispatch, index) => {
  if (element.optionsArray) return;
  let opt = await fetchFunction(url)
  
  // Condicional com operador ternário não funciona
  if(opt.modelos){
    opt = opt.modelos
  }
  
  dispatch(
    uploadOptions({
      index: index,
      value: opt,
    })
  );
  return;
};
