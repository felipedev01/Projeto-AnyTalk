// src/types/jitsi.d.ts
declare module "jitsi-meet-external-api" {
    interface JitsiMeetExternalAPIOptions {
      roomName: string;
      width?: string | number;
      height?: string | number;
      parentNode?: HTMLElement;
      configOverwrite?: object;
      interfaceConfigOverwrite?: object;
      userInfo?: {
        email?: string;
        displayName?: string;
      };
    }
  
    class JitsiMeetExternalAPI {
      constructor(domain: string, options: JitsiMeetExternalAPIOptions);
      dispose(): void;
    }
  
    export default JitsiMeetExternalAPI;
  }
  