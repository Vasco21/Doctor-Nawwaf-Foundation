import React from 'react';
import { Section } from '../../Styles/global';

const TopBar = () => {
  return (
    <Section className="header">
    <div className="gradient__bg">
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>+1 (347) 259-3243</small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small>dr.nawwaf.foundation@gmail.com</small>
            </div>
          </div>
          {/* <div className='d-flex pt-2 pb-2'>
            <div className='social-meddia -flex align-item-center'>
              <a href='#' className='text-light'>
                <i className='fab fa-facebook-f mr-4' />
              </a>
              <a href='#' className='text-light'>
                <i className='fab fa-twitter mr-4' />
              </a>
              <a href='#' className='text-light'>
                <i className='fab fa-instagram mr-4' />
              </a>
              <a href='#' className='text-light'>
                <i className='fab fa-youtube' />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
    </Section>
  );
};
export default TopBar;

