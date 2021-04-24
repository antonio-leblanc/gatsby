import React from 'react';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'



export default function Projects() {

  return (<>
    <div data-aos="fade-left">
      <div>Pantera</div>
      <div>ThreeJs</div>
      <div>FireMap</div>
      <Button
      endIcon={<SaveIcon/>}
      onClick={()=>console.log('hey')}
      variant="contained"
      color="primary">
        Hello World
      </Button>
    </div>
    </>
  )
}