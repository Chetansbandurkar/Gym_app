import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions } from '../utils/fetchData';
import { fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts,setBodyParts]=useState([]);
  // as we are going to fetch the categories of exercises 
  // at the start so the dependency array will be the empty
  useEffect(()=>{
    const fetchExerciseData=async()=>{
      const bodyPartData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyParts(['all', ...bodyPartData])//SPREAD SYNTAX WITHOUT MUTUATING ARRAY
    }
    fetchExerciseData();
  },[])
  // async function as we will be fetching the data from the api
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=900', exerciseOptions);
      // console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alighItems="center" mt="37px" justifyContent="center" p="20px" >
      <Typography fontWeight={700} sx={{
        fontSize: { lg: `44px`, xs: `30px` }
      }}>
        Awesome Excersises You <br />
        should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700px',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '42px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exersises'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '300px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',p:'20px'  }}>
        <HorizontalScrollbar data={bodyParts} bodyParts
        setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises;