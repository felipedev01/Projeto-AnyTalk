import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Meeting.css';
import Header from '../components/Header';

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

const Meeting = () => {
  const location = useLocation();
  const { name, room } = location.state || { name: 'User', room: 'defaultRoom' };
  const jitsiContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const domain = 'meet.jit.si';
    const options = {
      roomName: room,
      width: '100%',
      height: '100%',
      parentNode: jitsiContainerRef.current,
      userInfo: {
        displayName: name,
      },
      configOverwrite: {
        disableThirdPartyRequests: true,
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        SHOW_BRAND_WATERMARK: false,
        SHOW_POWERED_BY: false,
        JITSI_WATERMARK_LINK: '',
      }
    };

    if (jitsiContainerRef.current) {
      const api = new window.JitsiMeetExternalAPI(domain, options);

      // Clean up the meeting instance on component unmount
      return () => {
        api.dispose();
      };
    }
  }, [name, room]);

  return (
    <div className="meeting-page">
      <Header />
      <div className="meeting-container">
        <div ref={jitsiContainerRef} id="jitsi-container" />
      </div>
    </div>
  );
};

export default Meeting;











