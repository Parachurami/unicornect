import React from 'react';
import ReactLoading from 'react-loading';
// import {useEffect, useState} from "react";

const Loading = (() => {
    return(
    <div style={{height: '100vh', display:"flex", justifyContent:'center', alignItems:'center', background:'#EFF7FF'}}>
        <ReactLoading
            type={'bars'}
            color={'#FF8C40'}
            height={50}
            width={100}

        />
    </div>
    )
});

export default Loading;
