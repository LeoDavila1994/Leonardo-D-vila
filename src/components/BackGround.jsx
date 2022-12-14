import React from 'react';
import { useSelector } from 'react-redux';

const BackGround = () => {

    const swich = useSelector(state => state.swich);

    return (
        <div className='background-container' style={{ backgroundColor: `${swich ? "#414152" : "#f5f5f7"}` }}>
            <div className='bubbles'>
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
                <span className='span5'></span>
                <span className='span6'></span>
                <span className='span7'></span>
                <span className='span8'></span>
                <span className='span9'></span>
                <span className='span10'></span>
                <span className='span11'></span>
                <span className='span12'></span>
                <span className='span13'></span>
                <span className='span14'></span>
                <span className='span15'></span>
                <span className='span16'></span>
                <span className='span17'></span>
                <span className='span18'></span>
                <span className='span19'></span>
                <span className='span20'></span>
                <span className='span21'></span>
                <span className='span22'></span>
                <span className='span23'></span>
                <span className='span24'></span>
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
                <span className='span5'></span>
                <span className='span6'></span>
                <span className='span7'></span>
                <span className='span8'></span>
                <span className='span9'></span>
                <span className='span10'></span>
                <span className='span11'></span>
                <span className='span12'></span>
                <span className='span13'></span>
                <span className='span14'></span>
                <span className='span15'></span>
                <span className='span16'></span>
                <span className='span17'></span>
                <span className='span18'></span>
                <span className='span19'></span>
                <span className='span20'></span>
                <span className='span21'></span>
                <span className='span22'></span>
                <span className='span23'></span>
                <span className='span24'></span>
            </div>
        </div>
    );
};

export default BackGround;