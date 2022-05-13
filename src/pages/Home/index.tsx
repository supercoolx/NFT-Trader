import React, { Fragment } from 'react';
import HomeTop from './HomeTop';
import HomeDetail from './HomeDetail';
import HomeVideo from './HomeVideo';
import HomePlatform from './HomePlatform';

const Home = () => {
    return (
        <Fragment>
            <HomeTop />
            <HomeDetail />
            <HomeVideo />
            <HomePlatform />
        </Fragment>
    )
}

export default Home;