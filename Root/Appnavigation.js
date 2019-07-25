import React, { Component } from 'react';
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux';

//Screens
import Splash from './Screen/Spash'
import Home from './Screen/Home'
import SideMenu from './Screen/Sidemenu'
import CustomTopbar from './Screen/CustomTopbar'
import Services from './Screen/Services'
import BookAppointment from './Screen/BookAppointment'
import Updates from './Screen/Updates'
import Story from './Screen/Story'
import Meet from './Screen/Meet'
import Information from './Screen/Information'
import Contact from './Screen/Contact'



const AppNavigation = () => (
    <Router>
        <Stack key="root1" hideNavBar>
            <Scene key="splash" component={Splash} init />

            <Stack key="root" hideNavBar>
            {/* <Scene key="Services" component={Services} hideNavBar/> */}
            
            <Drawer
                key='sidemenu'
                contentComponent={SideMenu}
                drawerWidth={300}
                drawerPosition='left'
                hideNavBar
            >
                  <Scene key="Home" component={Home} hideNavBar/>

                  <Stack key="root1" hideNavBar>
                  <Scene key="Story" component={Story} hideNavBar/>
                  <Scene key="Meet" component={Meet} hideNavBar/>
                  <Scene key="Services" component={Services} hideNavBar/>
                  <Scene key="BookAppointment" component={BookAppointment}hideNavBar/>
                  <Scene key="Information" component={Information} hideNavBar/>
                  <Scene key="Contact" component={Contact} hideNavBar/>
                  <Scene key="Updates" component={Updates} hideNavBar/>
                  </Stack>
            </Drawer>
            </Stack>

        </Stack>
    </Router>
);


export default AppNavigation;
