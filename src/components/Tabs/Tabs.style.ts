import styled from "styled-components";

export const WrapperTab = styled.div`
  flex-grow: 1;
  background-color: ${(props) => props.theme.palette.background.default};
  display: flex;
  gap: 32px;

  & .css-35zqo5-MuiTabs-root {
    border-right: none;
  }
  & .css-11y7uy9-MuiButtonBase-root-MuiTab-root {
    text-transform: none;
    color: ${(props) => props.theme.palette.text.primary};
  }
  & .css-jpln7h-MuiTabs-scroller {
    padding: 20px 16px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.palette.secondary.main};
    width: 398px;
    max-width: 100%;
  }
  & .Mui-selected {
    color: ${(props) => props.theme.palette.primary.main};
    font-weight: bold;
  }
  & .Mui-selected img {
    outline: 3px solid ${(props) => props.theme.palette.primary.main};
  }
  & .Mui-selected .MuiTypography-h2 {
    color: ${(props) => props.theme.palette.text.primary};
  }
  & .css-v4onqz-MuiTabs-indicator {
    display: none;
  }
  & .css-lfwcke-MuiTabs-flexContainer {
    align-items: flex-start;
  }
`;
export const TabComponent = styled.div`
  background-color: ${(props) => props.theme.palette.secondary.main};
  padding: 20px 16px;
  border-radius: 16px;
  border-right: 0;
  width: 950px;
`;

export const Line = styled.hr`
  width: 100%;
  height: 2px;
  margin-top: 1rem;
`;
export const Button = styled.button`
  outline: none;
  text-align: left;
  border: none;
  width: 76px;
  height: 30px;
  font-size: 24px;
  padding: 20px 16px;
  line-height: 30px;
  color: ${(props) => props.theme.palette.text.secondary};
  background-color: ${(props) => props.theme.palette.secondary.main};
  cursor: pointer;
`;
