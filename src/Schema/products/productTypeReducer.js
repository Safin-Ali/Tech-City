import { DesktopSchema } from "./desktop/desktop";
import { MobileSchema } from "./mobile/mobile";

const productTypeReducer = (obj) => {
    const currWindowPathName = window.location.pathname.split('/');
    const currWindowPathNameLeng = currWindowPathName.length;
    const currDeviceVal = currWindowPathName[currWindowPathNameLeng-1];

    // check which product schema select
    if(currDeviceVal === 'mobile') return new MobileSchema (obj);
    if(currDeviceVal === 'desktop') return new DesktopSchema (obj);
};

export const productSchemaTypeReducer =  productTypeReducer;