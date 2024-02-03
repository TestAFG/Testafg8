
import React from 'react';
import './est.css'
import Form2 from './form/form2';
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({weight:["400","300","500","600","200"],subsets:["latin"]})
function est1Page() {
    return(
      <>
        <div className={`App ${urbanist.className}`}>
              <Form2/>
        </div>
      </>
    )
}

export default est1Page;