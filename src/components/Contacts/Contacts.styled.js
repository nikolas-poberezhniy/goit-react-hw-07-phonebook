import styled from 'styled-components';

export const ContactBlock = styled.div`
  width: 350px;
`;

export const ListOfContacts = styled.ul`
  min-height: 100px;
  padding-left: 0;
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 10px;

    button {
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      :hover {
        background-color: lightblue;
      }
    }
  }
`;
