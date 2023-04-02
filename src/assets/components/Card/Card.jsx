import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';

const Card = () => {
    const [datas, setData] = useState([]);
    const [showall,setShowall] = useState(false);
    const handleShowAll =() =>{
        setShowall(true);
    };
    const handleSort = () => {
        const sortedData = datas.sort((a, b) => {
          return new Date(b.published_in) - new Date(a.published_in);
        });
        setData([...datas, sortedData]);
      };
    useEffect( () => {
        fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then(res => res.json())
        .then(data => setData(data.data.tools))
    } ,[])
    return (
        <>
        <span onClick={handleSort}>
            <Button>short by data</Button>
        </span>
        <div className='grid grid-rows-1 md:grid-cols-3 gap-8 ml-4'>
            {
                datas?.slice(0, showall? 12 : 6).map(singleData=> <SingleData
                    singleData = {singleData}
                    key= {singleData.id}
                ></SingleData> )
            }
        </div>
            {
                !showall && 
                <span onClick={handleShowAll}>
                    <Button>see more</Button>
                </span>
            }
        </>
    );
};

export default Card;