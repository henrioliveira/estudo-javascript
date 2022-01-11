const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CAT_BTN = document.getElementById("change-cat");
const CAT_IMG = document.getElementById("cat");

const getCats = async () => {
    try {    
        const data = await fetch(BASE_URL);
            const json = data.json;

            return json.webpurl

    } catch(err) {
        console.log(err.message);
    }
};

const loadImg = async () =>{
    CAT_IMG.src = await getCats();
}

CAT_BTN.addEventListener('click', loadImg);

loadImg()