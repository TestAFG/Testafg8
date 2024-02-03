
import React from 'react';
import './est.css'
import Form3 from './form/form3';
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({weight:["400","300","500","600","200"],subsets:["latin"]})
function est2Page() {
    return(
      <>
        <div className={`App ${urbanist.className}`}>
              <Form3/>
        </div>
      </>
    )
}

export default est2Page;