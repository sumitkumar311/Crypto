import { createSlice } from '@reduxjs/toolkit';
import axios from "axios"


const initialState = {
  assets: [],
};

const cryptoSlice = createSlice({
  name: 'webcrypto',
  initialState,
  reducers: {

    getcrypto:(state, action)=>{
        state.assets = action.payload
    }

   
  },
});

export const fetchData = () => async (dispatch) => {
    try {

      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
      dispatch(getcrypto(response.data));
  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
export const { getcrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
