import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import OutlinedCard from '../components/project-card'
// import MediaControlCard from '../components/project-card2'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Pantera" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="ThreeJs" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Ancestralidade" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <a href='https://umgrauemeio.com/solucoes/' target='_blank'>Pantera</a>
      <section className="subsection">
      <div className="subsection-fix-video">
        <div className="video-container">
          <iframe className="resp-iframe" src="https://www.youtube.com/embed/FoUm9PzCnGg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <OutlinedCard text='ThreeJs'></OutlinedCard> */}
        <a href='https://antonio-leblanc.github.io/threejs/' target='_blank'>Threejs</a>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <OutlinedCard text='Ancestralidade'></OutlinedCard> */}
      </TabPanel>
    </div>
  );
}