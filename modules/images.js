const showImg = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    bigImg.style.cssText = `width: 75%; height: 80%; border-radius: 10px`;
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';



    imgPopup.appendChild(bigImg);


    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = "hidden";


            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";


        }
    });

};

export default showImg;