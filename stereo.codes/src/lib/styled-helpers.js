// import styled from 'styled-components';


/*
* @description "manager for z-index depth for sanity"
* @param {string} level "named level of depth"
* @return {number} "z-index value"
*/
export const zdepth = (level) => {
  const depth = {
    lowest: 0,
    low: 1,
    mid: 2,
    high: 3,
    highest: 4
  }
  return depth[level];
}

/*
* @description "loop over num and create grid template columns"
* @param {number} num "number of grid template columns"
* @return {literal} "css literal"
*/
export const gridTemplate = (num) => {
  let grid = '';
  for(let i = 1; i < num; i++) {
     grid += `
      .grid-${i}{
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(${i}, 1fr);
        align-items: start;
      }
    `;
  }
  return grid;
}

/*
* @description "loop over num and create grid columns"
* @param {number} num "number of grid columns"
* @return {literal} "css literal"
*/
export const gridTemplateCol = (num) => {
  let gridCol = '';
  for(let i = 0; i < num; i++) {
    gridCol += `
      .grid-col-${i}{
        grid-column-end: span ${i};
      }
    `;
  }
  return gridCol;
}