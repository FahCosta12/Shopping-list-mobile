import React, { useContext, useState } from "react";
import { Alert, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Background,
  Button,
  ButtonText,
  CloseButton,
  FieldArea,
  FieldName,
  FieldPrice,
  FieldQuantity,
  InfoArea,
  Title,
  WindowInner,
} from "./style";

import AppContext from "../../Context";

export default () => {
  const { state, dispatch } = useContext(AppContext);
  const [id, setId] = useState(state.is_edit ? state.edit_item.id : "");
  const [name, setName] = useState(state.is_edit ? state.edit_item.name : "");
  const [quantity, setQuantity] = useState(
    state.is_edit ? state.edit_item.quantity : ""
  );
  const [price, setPrice] = useState(
    state.is_edit ? state.edit_item.price : ""
  );
  const [priceMasked, setPriceMasked] = useState(
    state.is_edit ? state.edit_item.price : ""
  );

  let InputName = null;

  const handleOperation = () => {
    //console.log(priceMasked);

    if (!name || name == "") {
      Alert.alert("Warning", "Fill in the name!");
      return;
    }

    let newItem = {
      id: state.is_edit ? id : Math.randon() * 100000,
      quantity:
        quantity === 0 || quantity === "" || quantity === undefined
          ? "1"
          : quantity,
      name: name,
      price: isNaN(priceMasked) || priceMasked == "" ? "0" : priceMasked,
      done: false,
    };

    dispatch({
      type: state.is_edit ? "handleEditProduct" : "handleAddNewProduct",
      payload: newItem,
    });

    dispatch({
      type: "handleTotal",
      payload: true,
    });

    handleCloseModal();
  };

  const handleCloseModal = () => {
    setId("");
    setName("");
    setQuantity("");
    setPrice("");
    setPriceMasked("");

    dispatch({
      type: "setEditItem",
      payload: {},
    });

    dispatch({
      type: "handleIsEdit",
      payload: false,
    });

    dispatch({
      type: "handleModal",
      payload: false,
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={state.show_modal}
      onShow={() => {
        if (state.is_edit) {
          setId(state.edit_item.id);
          setName(state.edit_item.name);
          setQuantity(state.edit_item.quantity.toString());
          setPrice(state.edit_item.price);
          setPriceMasked(state.edit_item.price);
        }
        InputName.focus();
      }}
    >
      <Background behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Window>
          <Title>{state.is_edit ? "Alter product" : "Add product"} </Title>
          <WindowInner>
            <InfoArea>
              <FieldArea>
                <FieldName
                  placeholder="Product"
                  placeholderTextColor="#0d6631"
                  value={name}
                  onChangeText={(name) => setName(name)}
                  returnKeyType="Next"
                  ref={(input) => {
                    InputName = input;
                  }}
                  onSubmitEditing={() => {
                    InputQuantity.focus();
                  }}
                  blurOnSubmit={false}
                />
              </FieldArea>

              <FieldArea>
                <FieldQuantity
                  placeholder="Quantity"
                  placeholderTextColor="#0d6631"
                  value={quantity}
                  onChangeText={(quantity) => setQuantity(quantity)}
                  keyboardType="number-pad"
                  returnKeyType="Next"
                  ref={(input) => {
                    InputQuantity = input;
                  }}
                  onSubmitEditing={() => {
                    inputPrice.getElement().focus();
                  }}
                  blurOnSubmit={false}
                />

                <FieldPrice
                  type={"Money"}
                  placeholder="Price"
                  placeholderTextColor="#0d6631"
                  value={price}
                  includeRawValueInChangeText={true}
                  onChangeText={(text, masked) => {
                    setPrice(text);
                    setPriceMasked(masked);
                  }}
                  keyboardType="decimal-pad"
                  returnKeyType="Done"
                  ref={(inputRef) => {
                    inputPrice = inputRef;
                  }}
                />
              </FieldArea>

              <Button onPress={handleOperation}>
                <ButtonText>{state.is_edit ? "Change" : "Add"}</ButtonText>
              </Button>
            </InfoArea>
          </WindowInner>
          <CloseButton>
            <Icon name="Close" size={24} color="#ffffff" />
          </CloseButton>
        </Window>
      </Background>
    </Modal>
  );
};
