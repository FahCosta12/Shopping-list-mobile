import React, { createContext, useReducer } from "react";
import InitialState, { Api } from "";

const AppContext = createContext({});

const actions = {
  setDados(state, action) {
    Api.setDados(actions.payload);
    return action.payload;
  },
  handleShowDone(state, action) {
    let newState = { ...state, show_done: action.payload };
    Api.setDados(newState);
    return {
      ...state,
      show_done: action.payload,
    };
  },
  handleIsEdit(state, action) {
    let newState = { ...state, is_edit: action.payload };
    Api.setDados(newState);
    return {
      ...state,
      is_edit: action.payload,
    };
  },
  setEditItem(state, action) {
    let newState = { ...state, edit_item: action.payload };
    Api.setDados(newState);
    return {
      ...state,
      edit_item: action.payload,
    };
  },
  handleModal(state, action) {
    let newState = { ...state, show_modal: action.payload };
    Api.setDados(newState);
    return {
      ...state,
      show_modal: action.payload,
    };
  },
  handleAddNewProduct(state, action) {
    let newState = { ...state, products: [action.payload, ...state.products] };
    Api.setDados(newState);
    return {
      ...state,
      products: [action.payload, ...state.products],
    };
  },
  handleEditProduct(state, action) {
    let product = action.payload;
    state.products.forEach((item) => {
      if (item.id === product.id) {
        item.name = product.name;
        item.quantity = product.quantity;
        item.price = product.price;
      }
    });
    let newState = { ...state, products: state.products };
    Api.setDados(newState);
    return {
      ...state,
      products: state.products,
    };
  },
  handleDeleteProduct(state, action) {
    item = action.payload;
    let newState = {
      ...state,
      products: state.products.filter((i) => i.id !== item),
    };
    Api.setDados(newState);
    return {
      ...state,
      products: state.products.filter((i) => i.id !== item),
    };
  },
  handleToggleDone(state, action) {
    let product = action.payload;
    state.products.forEach((item) => {
      if (item.id === product.id) {
        item.done = product.done;
      }
    });
    let newState = { ...state, product: state.products };
    Api.setDados(newState);
    return {
      ...state,
      products: state.products,
    };
  },
  handleTotal(state, action) {
    let total = 0;
    state.products.map(
      (item) =>
        (total = total + parseInt(item.quantity) * parseFloat(item.price))
    );
    total = parseFloat(total).toFixed(2);
    let newState = { ...state, total: total };
    Api.setDados(newState);
    return {
      ...state,
      total: total,
    };
  },
};

export const AppProvider = (props) => {
  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }

  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
