import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
html{
	height: 100%;
}

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	//font: inherit;
	vertical-align: baseline;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
	display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
	font-weight: 300;
	line-height: 1;
  box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background : ${(props) => `
     linear-gradient(180deg, ${props.theme.mainColor}, ${props.theme.subColor});
  `};
}

*{
  
}

menu, ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
