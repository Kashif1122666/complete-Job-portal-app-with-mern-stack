import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singleJob:null,
        searchJobByText:"",

    },
    reducers:{
        //acions
        setAllJobs:(state,action)=>{
            state.allJobs = action.payload;
        },
        setSingleJob:(state,acion)=>{
            state.singleJob= acion.payload;
        },
        setAllAdminJobs:(state,acion)=>{
            state.allAdminJobs = acion.payload;
        },
        setSearchJobByText:(state,action)=>{
            state.searchJobByText = action.payload
        }

    }
});
export const {setAllJobs,setSingleJob,setAllAdminJobs,setSearchJobByText} = jobSlice.actions;
export default jobSlice.reducer;