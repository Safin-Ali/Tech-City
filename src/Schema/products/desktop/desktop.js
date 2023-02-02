export class DesktopSchema {
    constructor (obj) {
    this.performance  = {
        RAM: obj['RamRam & ROM'] + ' GB',
        ROM: obj['ROMRam & ROM'] + ' GB',
        CPUName: obj.CPUName,
        CPUModel: obj.CPUModel,
        GPUName: obj.GPUName,
        GPUModel: obj.GPUModel,
    };

    this.camera = {
        front: obj.FrontCamera + ' px',
        rear: obj.RearCamera + ' px'
    };

    this.capacity  = {
        bettery: obj['BetteryCharge & Bettery'] + ' mAh',
        charger: obj['ChargerCharge & Bettery'] + 'W'
    };

    this.touchScreen = {
        size: obj.SizeDisplay + ' Inch',
        technology: obj.TechnologyDisplay + ' Touchscreen',
        resolution: obj.ResolutionDisplay,

    };

    this.connectivity = {
        network: obj.NetworkConnection + ' VoLTE',
        wifi: obj.WifiConnection + 'G',
        usb: obj.USBConnection
    };

    this.system = {
        android: obj.OSSystem
    };

    this.security = obj.SecuritySystem.split(',');

    this.price = {
        base: obj.BasePrice + ' USD',
        deivery: obj.DeliveryPrice + ' USD',
        total: obj.BasePrice + obj.DeliveryPrice + ' USD'
    };

    this.others = {
        year: obj.YearOthers,
        color: obj.ColorOthers,
    };

    this.brand = obj.brand;

    this.device = obj.device;

    this.deviceImage = obj.ProductImages[0];
    };
};