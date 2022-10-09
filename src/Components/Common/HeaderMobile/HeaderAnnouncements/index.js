import React from 'react';
import './style.scss';
import {ReactComponent as AnnouncementSvg} from '../../../../assets/svg/plane.svg';


const HeaderAnnouncements = (props) => {

  return (
    <div className="header-announcements d-flex justify-content-center mt-2">
      <div>
      <span className="me-2"> <AnnouncementSvg/></span>
      <span> {props?.announcements} </span>
      </div>
    </div>
  )
}

export default HeaderAnnouncements;
