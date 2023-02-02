import axios from "axios";

const checkImgSize = async (file) => {
    const fileType = file?.type.split("/")[0];
    if(fileType !== "image") return alert('Please Select Only Image File');
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise(resolve => {
        reader.onload = function () {
            const img = new Image();
            img.src = reader.result;
             img.onload = function () {
                if(img.width && img.height !== 500) return resolve(false);
                resolve(img.width)
            };
        };
    });
}

const uploadImage = async (files) => {
    try{

        const imageSize = await checkImgSize(files);
        if(!imageSize) return alert('Sorry! Image Size Max');
        const imageData = new FormData;
        imageData.append('image',files)
        const res =  await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_TECH_CITY_SECRET}`,imageData);
        return res.data.data.url;
    }
    catch(e){
        return console.log(e.message)
    }
};

export default uploadImage;