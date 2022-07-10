import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function BasicCard(props) {
  const [childRender, setChildRender] = React.useState(true);

  React.useEffect(() => {
    return () => {
      console.log("Unmounting phase of Cards Component")
    }
  }, []);
  
  const handleToggle = () => {
    if(props.toggleComponentFromParent) {
      props.toggleComponentFromParent(!childRender);
      setChildRender(!childRender);
    }
  }

  return (
    <Card sx={{ width: 260 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.subheading}
        </Typography>
        <Typography variant="h5" component="div" style={{color: props.textColour}}>
            {props.heading}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="body2">
          {props.functionalities}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleToggle}>{props.buttonName}</Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;