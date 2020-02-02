import delay from "delay";

export const deleteArticle = (id: any) => async (dispatch: Function, getState: Function) => {
  dispatch({ type: "SET_LOADING", data: true });

  const exists = getState().articles.find((a: any) => a.id === id);
  if (!exists) {
    alert("Cet article n'existe déjà plus");
    return;
  }

  await delay(1000);

  dispatch({ type: "DELETE_ARTICLE", data: id });

  dispatch({ type: "SET_LOADING", data: false });
  return Promise.resolve();
};
