const autoTitleChanger = (titleName) => {
    const home = '/' || '';
    if(titleName === home ) return document.title= 'Tech City - Home';

    const title = titleName.split('/')[1];

    const firstLatterUpperCase = title[0].toUpperCase();

    const titleArr = [...title];

    titleArr[0] = firstLatterUpperCase;

    const capitalizeTitle = titleArr.join('');

    return document.title= `Tech City - ${capitalizeTitle}`;
};

export default autoTitleChanger;