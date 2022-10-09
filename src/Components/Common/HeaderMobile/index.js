import React from 'react';
import HeaderAnnouncements from './HeaderAnnouncements';
import HeaderMenu from './HeaderMenu';
import HeaderBanner from './HeaderBanner';
import UserControls from './UserControls';

const HeaderMobile = () => {
  const announcements = 'free shipping';
  return (
    <div className="header-mobile mt-2">
    <HeaderAnnouncements announcements={announcements} />
    <UserControls/>
    <HeaderMenu/>
    <HeaderBanner/>
    </div>
  )
}

export default HeaderMobile;
