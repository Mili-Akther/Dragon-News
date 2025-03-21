import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUS from '../FindUS';

const RightNav = () => {
    return (
        <div className='space-y-5'>
         <SocialLogin></SocialLogin>
         <FindUS></FindUS>
        </div>
    );
};

export default RightNav;