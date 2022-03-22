import React from 'react'
import './home.scss'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeOutlined';
import Navbar from '../../components/navbar/Navbar';
import Back from '../../assets/background.jpg'
import City from '../../assets/city.jpg'
import Feature from '../../components/feature/Feature';
import List from '../../components/list/List';
const Home = () => {
  return (
    
    <div className='home'>
        {/* <AccessTimeFilledIcon/> */}
        <Navbar/>
        <img width="100%" src={City}alt=""/>
        <Feature /*{type="series"}*/ />
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
    


    

  )
}

export default Home