export const SCROLL_STYLE = {
  maxHeight: "80vh",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "0px",
    background: "transparent", // ocultar barra de scroll Chrome
  },
  scrollbarWidth: "none", // ocultar barra de scroll - Firefox
  msOverflowStyle: "none", // ocultar barra de scroll - Internet Explorer y Edge
};
