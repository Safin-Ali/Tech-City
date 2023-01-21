const autoTitleChanger = (titleName) => {
    const home = '/' || '';
    if(titleName === home ) return document.title= 'Tech City - Home';

    const title = titleName.split('/')[1];

    const capitalizeTitle = title[0].toUpperCase() + title.slice(1);

    return document.title= `Tech City - ${capitalizeTitle}`;
};

export default autoTitleChanger;