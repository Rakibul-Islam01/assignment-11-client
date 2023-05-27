import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './CarToysTabs.css'


const CarToyTabs = ({toys}) => {
    console.log(toys)
    return (
        <div className='my-12 mx-auto'>

            {/* <div className="tabs">
                <a className="tab tab-bordered">Tab 1</a>
                <a className="tab tab-bordered tab-active">Tab 2</a>
                <a className="tab tab-bordered">Tab 3</a>
            </div> */}
            <Tabs className='center'>
                <TabList className='list-tab'>
                    <Tab className='tab'>Remote Control Cars</Tab>
                    <Tab className='tab'>sports car</Tab>
                    <Tab className='tab'>Truck</Tab>
                </TabList>
                <hr className='tab-border' />

                <TabPanel>
                    <h2>Remote Control Cars Content</h2>
                    {/* Add your content for Remote Control Cars here */}
                </TabPanel>

                <TabPanel>
                {/* <h2>Die-cast Cars Content</h2> */}
                Add your content for Die-cast Cars here
                </TabPanel>

                <TabPanel>
                {/* <h2>Model Cars Content</h2> */}
                Add your content for Model Cars here
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CarToyTabs;