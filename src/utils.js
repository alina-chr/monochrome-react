import bowser from 'bowser';

export const isHandheld = bowser.mobile || bowser.tablet;

