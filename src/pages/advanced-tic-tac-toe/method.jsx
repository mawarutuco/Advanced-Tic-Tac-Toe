import { MyAlert } from "../../components/alert";

export const theme1 = "primary";
export const theme2 = "warning";

export const gameAlert = (text, fn) => {
  MyAlert({
    title: text,
    showCancelButton: true,
    confirmButtonText: "重新遊戲",
    cancelButtonText: "觀看棋盤",
  }).then((result) => {
    if (result.isConfirmed) fn();
  });
};

//判斷遊戲勝利
const judgeRow = (idx, arr) => {
  let judgeColor = arr[idx].color;
  if (judgeColor === arr[idx + 1].color && judgeColor === arr[idx + 2].color)
    return true;
  return false;
};
const judgeCol = (idx, arr) => {
  let judgeColor = arr[idx].color;
  if (judgeColor === arr[idx + 3].color && judgeColor === arr[idx + 6].color)
    return true;
  return false;
};
const judgeSlash = (idx, arr) => {
  let judgeColor = arr[idx].color;
  if (judgeColor === arr[4].color) {
    if (idx === 0 && judgeColor === arr[8].color) return true;
    if (idx === 2 && judgeColor === arr[6].color) return true;
  }
  return false;
};

export const judgeWinner = (arr) => {
  if (arr[0].color) {
    if (judgeRow(0, arr)) return [true, arr[0].color];
    if (judgeCol(0, arr)) return [true, arr[0].color];
    if (judgeSlash(0, arr)) return [true, arr[0].color];
  }
  if (arr[2].color) {
    if (judgeCol(2, arr)) return [true, arr[2].color];
    if (judgeSlash(2, arr)) return [true, arr[2].color];
  }
  if (arr[3].color) if (judgeRow(3, arr)) return [true, arr[3].color];
  if (arr[6].color) if (judgeRow(6, arr)) return [true, arr[6].color];
  if (arr[1].color) if (judgeCol(1, arr)) return [true, arr[1].color];
  return [false, ""];
};

export const judgeDisabled = (turn, qty) => {
  if (qty < 1) return true;
  if (!turn) return true;
  return false;
};
