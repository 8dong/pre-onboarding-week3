import { createSlice } from '@reduxjs/toolkit';

export type sickItem = {
  sickCd: string;
  sickNm: string;
};

const sickArrSlice = createSlice({
  name: 'sickArr',
  initialState: [] as sickItem[],
  reducers: {
    addSickItem(stateObj: sickItem[], action) {
      let updatedSickArr = [...action.payload, ...stateObj];

      updatedSickArr = updatedSickArr.filter((sick, index) => {
        return (
          updatedSickArr.findIndex((sick2) => {
            return sick.sickCd === sick2.sickCd;
          }) === index
        );
      });

      return updatedSickArr;
    }
  }
});

export default sickArrSlice;
