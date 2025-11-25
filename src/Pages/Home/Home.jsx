import { useEffect } from "react";
import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Technology from '../../Components/Technology/Technology';
import RecentPost from '../../Components/RecentPost/RecentPost';
import Newsletter from '../../Components/Newsletter/Newsletter';

const Home = () => {

      useEffect(() => {
    document.title = "AVYAN:EVERGREEN";
  }, []);
    return (
        <div>

            {/* banner component  */}
            <div>
                <Banner></Banner>
            </div>

            {/* Technology component  */}
            <div>
                <Technology/>
            </div>

            {/* Recent post component  */}
            <div>
                <RecentPost/>
            </div>

            {/* newsletter component  */}
            <div>
                <Newsletter/>
            </div>
        </div>
    );
};

export default Home;