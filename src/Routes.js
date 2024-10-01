import React from "react";
import { Routes, Route } from "react-router-dom";
import {
Investors, 
Stages
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                            <Route path="/" element={<Investors {...props} title={'Investor'} nolistbar={true} />} />
                        
                <Route path="/investor" element={<Investors {...props} title={'Investor'} />} />
                <Route path="/products" element={<Stages {...props} title={'Stage'} />} />
        </Routes>
    )

};

export default Component;