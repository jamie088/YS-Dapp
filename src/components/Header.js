import React from 'react';
import logo from '../images/WEBSITE HEADER_black_flip.png';

const Header = () => {
    return (
        <a href='../#Home'>
            <img src={logo} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 584.515625px, (max-width: 1279px) 88vw, 876.765625px"  alt="" className="image-9" />
        </a>
    );
};

export default Header;