import { DropdownStyles } from '@components/ui/menu/menu.styled';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'StudioFeixenSans';
    font-style: normal;
    font-display: swap;
    src: url("/fonts/StudioFeixen/StudioFeixenSans.otf") format("opentype"),
    url("/fonts/StudioFeixen/StudioFeixenSans.woff") format("woff"),
    url("/fonts/StudioFeixen/StudioFeixenSans.woff2") format("woff2");
  }

  @font-face {
    font-family: 'StudioFeixenSansAlternates';
    font-style: normal;
    font-display: swap;
    src: url("/fonts/StudioFeixen/StudioFeixenSansAlternates.otf") format("opentype"),
    url("/fonts/StudioFeixen/StudioFeixenSansAlternates.woff") format("woff"),
    url("/fonts/StudioFeixen/StudioFeixenSansAlternates.woff2") format("woff2");
  }

  


  body {
    font-family: 'StudioFeixenSans', sans-serif;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    font-variant-ligatures: normal;


    &.menu-open,
    &.drawer-open,
    &.modal-open {
      overflow: hidden;


    }
    .bold{
      font-weight: bold;
    }
    .regular {
      font-family: 'StudioFeixenSans', sans-serif;
    }
    p{
      font-family: 'StudioFeixenSans', sans-serif;
    }

    ${DropdownStyles};
  }

  * {
    box-sizing: border-box;
  }
  

  #__next, html, body{
    height: 100%;
    min-height: 100%;
  }

  .Toastify__toast-container {
      z-index: 1000000;
  }
`;

export default GlobalStyle;
