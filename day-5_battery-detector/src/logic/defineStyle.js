export const defineStyle = (number) => {
  let style = {
    background: '',
    height : `${number}%`
  }

  if (number >= 75) {
    style.background = 'linear-gradient(90deg, rgba(217,252,2,1) 0%, rgba(24,201,17,1) 32%, rgba(0,255,179,1) 100%)';
  } else if (number >= 50) {
    style.background = 'linear-gradient(90deg, rgba(255,115,0,1) 0%, rgba(218,238,8,1) 32%, rgba(138,233,45,1) 100%)'
  } else if (number >= 25) {
    style.background = 'linear-gradient(90deg, rgba(255,29,0,1) 0%, rgba(238,127,8,1) 32%, rgba(233,206,42,1) 100%)'
  } else {
    style.background = 'linear-gradient(90deg, rgba(98,32,24,1) 0%, rgba(215,5,5,1) 32%, rgba(250,100,68,1) 100%)'
  } 

  return style;
}