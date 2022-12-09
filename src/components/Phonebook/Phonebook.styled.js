import styled from 'styled-components';

export const PhonebookWrapp = styled.div`
  width: 300px;
`;

export const PhonebookForm = styled.form`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  text-align: left;

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 10px;
    width: 200px;
  }

  div {
    input {
      padding: 5px 10px;
      border-radius: 5px;
      width: 100px;
      border: none;
      cursor: pointer;
      :hover {
        background-color: lightblue;
      }
    }
  }
`;
