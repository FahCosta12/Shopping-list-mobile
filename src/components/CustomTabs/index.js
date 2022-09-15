import React, { useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AppContext from "../../Context";

export default () => {
  const { state: appstate, dispatch } = useContext(AppContext);

  const handleModal = () => {
    dispatch({
      type: "handleModal",
      payload: true,
    });
  };

  const handleShowDone = (what) => {
    dispatch({
      type: "handleShowDone",
      payload: what,
    });
  };

  return (
    <TabArea>
      {appstate.show_done === false && (
        <TabItem
          onPress={() => {
            handleShowDone(true);
          }}
        >
          <Icon name="eye-slash" size={24} color="#1e8449" />
        </TabItem>
      )}
      {appstate.show_done === true && (
        <TabItem onPress={() => [handleShowDone(false)]}>
          <Icon name="eye" size={26} color="#1e8449" />
        </TabItem>
      )}
      <TabItemPrice>
        <PriceContiner>
          <Price> {"R$ ${appstate.total}"} </Price>
        </PriceContiner>
      </TabItemPrice>
      <TabItemFilled onPress={handleModal}>
        <Icon name="plus-square" size={24} color="#ffffff" />
      </TabItemFilled>
    </TabArea>
  );
};
