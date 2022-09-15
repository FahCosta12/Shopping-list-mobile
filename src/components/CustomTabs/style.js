import styled from "styled-components/native";

export const TabArea = styled.View`
flex-direction: row;
align-items: center
justify-content: space-between
width: 100%
height: 60px
background-color: #89bf9f
`;

export const TabItem = styled.TouchableOpacity`
flex: 1
align-items: center
justify-content: center
height: 60px
`;

export const TabItemFilled = styled(TabItem)`
  background-color: #196f3d;
`;

export const TabItemPrice = styled(TabItem)`
  background-color: #1e8449;
`;

export const PriceContainer = styled.View`
background-color: #ffffff
height: 30px
border-radius: 15px
align-items: center
justify-content: center
padding: 0 10px
`;

export const Price = styled.Text`
color: #1e8449
font-size: 16px
font-weight: bold
`;
