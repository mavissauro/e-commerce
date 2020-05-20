import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;
export const CollectionItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & .div {
    margin-bottom: 30px;
  }
`;
