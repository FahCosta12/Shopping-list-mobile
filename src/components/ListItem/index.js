import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  CheckArea,
  CheckButton,
  Infos,
  ListInnerContainer,
  ListItemContainer,
  ListItemInner,
} from "./style";

export default ({ item, onPress, onLongPress }) => {
  return (
    <ListItemContainer key={"${item.id}"}>
      <ListItemInner onPress={onPress} onLongPress={onLongPress}>
        <ListInnerContainer>
          <Infos>
            <Nome>{item.name}</Nome>
            <InfoText>Quantity: {item.quantity}</InfoText>
            <InfoText>
              Price: R$ {parseFloat(item.price).toFixed(2)} - Total: R${" "}
              {parseFloat(item.quantity * item.price).toFixed(2)}{" "}
            </InfoText>
          </Infos>
          <CheckArea>
            <CheckButton done={item.done == true ? true : false}>
              <Icon name="check" size={24} color="#ffffff" />
            </CheckButton>
          </CheckArea>
        </ListInnerContainer>
      </ListItemInner>
    </ListItemContainer>
  );
};
