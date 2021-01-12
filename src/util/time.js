/* eslint-disable import/prefer-default-export */
export const convertNumberToTime = time =>
  // input=62 , output=1:02
  // eslint-disable-next-line no-param-reassign
  `${Math.floor(time / 60)}:${
    time % 60 < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60)
  }`;
