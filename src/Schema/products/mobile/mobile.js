export class MobileSchema {
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
        android: obj.OSSystem,
        sensors: obj.SensorsSystem,
    };

    this.security = obj.SecuritySystem.split(',');

    this.price = {
        base: obj.BasePrice + ' USD',
        deivery: obj.DeliveryPrice + ' USD',
        discount: obj.DiscountPrice|| 0,
        total: Math.round(obj.BasePrice - (obj.BasePrice * obj.DiscountPrice/100)) + obj.DeliveryPrice + ' USD'
    };

    this.others = {
        year: obj.YearOthers,
        color: obj.ColorOthers,
        model: obj.ModelOthers,
    };

    this.brand = obj.brand;

    this.device = obj.device;

    this.activity = obj.activity;

    this.deviceImage = obj.ProductImages[0];
    };
};