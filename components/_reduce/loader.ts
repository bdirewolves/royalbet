

export default `
#globalLoader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: visible;
  opacity: 1;
  transition: visibility 0.3s, opacity 0.2s linear;
  transition-delay: .5s;

  background-color: #000;
}

#globalLoader img {
  width: 200px;
  heigth: auto;
}
`