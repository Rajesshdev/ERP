import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }
    &::-webkit-scrollbar {
        width: 8px; 
        background-color: #f5f5f5; 
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: #c0c0c0; 
        border-radius: 4px; 
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background-color: #a0a0a0; 
      }
      
      &::-webkit-scrollbar-thumb:active {
        background-color: #808080; 
      }

      
`;
