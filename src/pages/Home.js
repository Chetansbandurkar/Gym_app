import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/material';
import Exercise from '../components/Exercise';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      <Exercise
        setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}
      />
    </Box>
  )
}
export default Home;