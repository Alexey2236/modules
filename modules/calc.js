const calc = (size, material, options, promocode, prise) => {
    const sizePictures = document.querySelector(size),
        materialPictures = document.querySelector(material),
        optionsPuctures = document.querySelector(options),
        promocodeInput = document.querySelector(promocode),
        resultPrise = document.querySelector(prise);
    let sum = 0;

    const sumFunc = () => {
        sum = Math.round((+sizePictures.value) * (+materialPictures.value) + (+optionsPuctures.value));
        if (sizePictures.value == '' || materialPictures.value == '') {
            resultPrise.textContent = "Выберите размер и материал картины";
        } else if (promocodeInput.value === ' IWANTPOPART') {
            resultPrise.textContent = Math.round(sum * 0.7);
        } else {
            resultPrise.textContent = `${sum} руб.`;
        }
    };

    sizePictures.addEventListener('change', sumFunc);
    materialPictures.addEventListener('change', sumFunc);
    optionsPuctures.addEventListener('change', sumFunc);
    promocodeInput.addEventListener('input', sumFunc);


};

export default calc;