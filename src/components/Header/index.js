import React from "react";
import { HeaderArea, HeaderImage, HeaderTitleArea, HeaderTitle } from "./style";

export default ({ title }) => {
  return (
    <HeaderArea>
      <HeaderImage source={require("../../../assets/groceries.jpg")} />
      <HeaderTitleArea>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderTitleArea>
    </HeaderArea>
  );
};
