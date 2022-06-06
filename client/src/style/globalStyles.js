import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* CSS Reset */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
      font-family: 'Nunito', sans-serif;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    html {
      // overflow: auto;
    }

    /* CSS Variables */

    :root {

        /* Colors */
        --clr-white: rgb(255, 255, 255);
        --clr-lightgrey: rgb(235, 235, 235);
        --clr-grey: rgb(200, 200, 200);
        --clr-darkgrey: rgb(160, 160, 160);
        --clr-lightblue: rgba(185, 197, 207);
        --clr-lightnavy: rgb(80, 111, 134);
        --clr-brightblue: rgb(80, 147, 197);
        --clr-navy: rgb(60, 80, 101);
        --clr-darknavy: rgb(47, 60, 79);
        --clr-yellow: rgb(251, 176, 64);
        --clr-peach: rgba(242, 198, 177);

    }

    /* Scrollbar Styling */

    ::-webkit-scrollbar {
        width: 0.7em;
    }
      
    ::-webkit-scrollbar-track {
        -webkit-border-radius: 1em;
        border-radius: 1em;
        background-color: var(--clr-lightgrey);
    }
    
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 1em;
        border-radius: 1em;
        background: var(--clr-navy);
    }

`;

export default GlobalStyle;
