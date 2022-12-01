import React from 'react';
import { Section } from "../../Styles/global";

import blogImage1 from '../../images/blog1.jpg';
import blogImage2 from '../../images/blog2.jpg';
import blogImage3 from '../../images/blog3.jpg';

const Blog = () => {
  return (
    <Section id='blog' accent>
      <>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Blog
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            <span>Civic Engagement And Youth Empowerment Project </span>  
             Using the youth empowerment solutions for peaceful communities
            curriculum that focused on developing leadership skills, self-esteem, and the ability
            to facilitate youth involvement in the Queensbridge Houses Resident Association and other 
            civic engagement activities.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage1} className='card-img-top' alt='Blog 1' />
                <div className='card-body'>
                  <h5 className='card-title'>High Quality Support</h5>
                  <p className='card-text'>
                    We know that work is more satisfying when you’re making a difference. 
                    At Creative Power Organisation, everything we do makes an impact on youth. 
                    We tackle complex challenges daily that inspire us to develop innovative solutions 
                    by listening to young people, 
                    and provide the needed tools and resources to those working and supporting youth.
                    Put our research to work with these practical solutions so 
                    that you can help all young people become their best selves.
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage2} className='card-img-top' alt='Blog 2' />
                <div className='card-body'>
                  <h5 className='card-title'>Research Financial</h5>
                  <p className='card-text'>
                  As a non-profit organization, Creative Power Organisation has long relied on 
                  unders and partners to make our work possible. 
                  These organizations have recognized that changing the 
                  trajectory of the lives of youth takes a collective effort. 
                  For those who have walked along side us for the past 1 year, we are truly grateful.
                  In addition, we rely on philanthropic support to create a world where all kids thrive. 
                  For those who can partner with us in this way, we welcome your generosity.
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage3} className='card-img-top' alt='Blog 3' />
                <div className='card-body'>
                  <h5 className='card-title'>Organisation Deal</h5>
                  <p className='card-text'>
                  We are a committed group of individuals, family and friends. 
                  We are determined in improving our society’s view on helping those who reaches out for help.
                  Our movement and efforts has inspired others alike to lend a helping hand to those in need.
                  is a non-profit organization striving for equality. Our goal is to develop and uphold standards of equality, 
                  and create an environment in which every boys and girls can exercise the Youth Voices.
                  help them explore their true potential while becoming adults.
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    </Section>
  );
};

export default Blog;