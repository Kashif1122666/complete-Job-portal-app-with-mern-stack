import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        singleJob:null,
    },
    reducers:{
        //acions
        setAllJobs:(state,action)=>{
            state.allJobs = action.payload;
        },
        setSingleJob:(state,acion)=>{
            state.singleJob= acion.payload;
        }

    }
});
export const {setAllJobs,setSingleJob} = jobSlice.actions;
export default jobSlice.reducer;