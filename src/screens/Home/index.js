import React, { useContext, useEffect } from "react";
import { Alert } from "react-native";

import Header from "../../components/Header";
import ListItem from "../../components/ListItem";

import { Container, ListArea, Spacer } from "./style";

import AppContext from "../../Context";

export default () => {
  const { state, dispatch } = useContext(AppContext);

  const handleShowPrompt = (item) => {
    Alert.alert("What do you wanna do ?", "", [
      {
        text: "Edit",
        onPress: () => {
          handleEdit(item);
        },
      },
      {
        text: "Delete",
        onPress: () => {
          handleDelete(item);
        },
      },
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
    ]);
  };

  const handleToggleDone = (item) => {
    dispatch({
      type: "handleToggleDone",
      payload: {
        id: item.id,
        done: !item.done,
      },
    });

    dispatch({
      type: "handleTotal",
      payload: true,
    });
  };

  const handleEdit = (item) => {
    dispatch({
      type: "setEditItem",
      payload: item,
    });

    dispatch({
      type: "handleEdit",
      payload: true,
    });

    dispatch({
      type: "handleModal",
      payload: true,
    });
  };

  const handleDelete = (item) => {
    dispatch({
      type: "handleDeleteProduct",
      payload: true,
    });

    dispatch({
      type: "handleTotal",
      payload: true,
    });
  };

  useEffect(() => {
    //console.log(state);
  }, []);

  return (
    <Container>
      <Header title="Shopping list" />
      <ListArea>
        {state.products.lenght > 0 &&
          state.products.map((item, key) => {
            if (state.show_done === false && item.done === true) return;

            return (
              <ListItem
                key={key}
                item={item}
                onPress={() => {
                  handleToggleDone(item);
                }}
                onLongPress={() => {
                  handleShowPrompt(item);
                }}
              />
            );
          })}
        <Spacer />
      </ListArea>
    </Container>
  );
};
