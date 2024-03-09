import React from 'react'
import { Button,Typography ,Stack,} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
  // object destructuring 
  const {bodyPart,gifUrl,name,target,equipment}=exerciseDetail;
  const extraDetail=[
    {
      icon:BodyPartImage,
      name:bodyPart,
    },
    {
      icon:TargetImage,
      name:target,
    },
    {
      icon:EquipmentImage,
      name:equipment,
    }
  ]
  return (
   <Stack gap="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
    <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
    <Stack sx={{ gap:{lg:'35px',xs:'20px'}}}>
      <Typography variant='h4'>
        {name}
      </Typography>
      <Typography variant='h6'>
        Exercise Keep You Strong .{name} {` `}
        is one of the best exercises to target your {target}.It will help you
        improve your mood and gain energy.
      </Typography>
      {
        extraDetail.map((item)=>(
          <Stack key={item.name} direction="row" gap="24px" alighItems="center">
            <Button sx={{background:'#fff2db' ,borderRadius:'50%',width:'100px',
                height:'100px'}}>
              <img src={item.icon} alt='body'/>
            </Button>
            <Typography variant='h6' textTransform="capitalize">
              {item.name}
            </Typography>
            </Stack>
        ))
      }
    </Stack>
   </Stack>
  )
}

export default Detail