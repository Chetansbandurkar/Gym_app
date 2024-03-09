import React from 'react'
import { useEffect,useState } from 'react';
import { Pagination } from '@mui/material';
import {Box,Stack,Typography} from '@mui/material/'
import ExerciseCard  from './ExerciseCard';
import { exerciseOptions,fetchData } from '../utils/fetchData';
const Exercise = ({ exercises, setExercises, bodyPart }) => {
  // console.log(exercises);
  const [currentPage,setCurrentpage]=useState(1);
  const exercisePerPage=9;
  const indexofLastexercise=currentPage*exercisePerPage;
  const indexofFirstExercise=indexofLastexercise-exercisePerPage;
  const currentExercises=exercises.slice(indexofFirstExercise,indexofLastexercise);
  const  paginate=(e,value)=>{
    setCurrentpage(value);
    window.scrollTo({top:1800,behavior:'smooth'});
  }
  useEffect(()=>{
    const fetchExerciseData=async()=>{

      let exercisesData=[];
      if(bodyPart==='all'){
        exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=900',exerciseOptions)
      }else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=900`,exerciseOptions);
      }
      setExercises(exercisesData);
    };
    fetchExerciseData();
  },[bodyPart]);
  return (
    <Box id="exercises"
     sx={{mt:{lg:'109px'}}}
     mt="50px"
     p="20px"
    >
      <Typography  variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px', xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
      {
        currentExercises.map((exercise,index)=>(
         <ExerciseCard key={index} exercise={exercise}/>
        ))
      }
      </Stack>
      <Stack mt="100" alignItems="center">
      {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            // onchange send the e =event and the value of current page
            // look at apaginate function 
            onChange={paginate}
            size="large"
          />
        )}

      </Stack>
    </Box>
  )
}
export default Exercise;