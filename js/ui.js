function openCharModal(element) {
    const name = element.getAttribute('data-name');
    const image = element.getAttribute('data-img');
    const hasShikai = element.getAttribute('data-shikai') === 'true';
    const hasBankai = element.getAttribute('data-bankai') === 'true';

    let descContent = "";
    const descId = element.getAttribute('data-desc'); 
    if (descId && descId.startsWith('LOAD_ID:')) {
        const contentId = descId.split(':')[1]; 
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            descContent = contentElement.innerHTML;
        }
    } else {
        descContent = "Ошибка загрузки контента";
    }

    document.getElementById('modal-img').src = image;
    document.getElementById('modal-name').innerText = name;
    document.getElementById('modal-desc').innerHTML = descContent;

    const shikaiBadge = document.getElementById('badge-shikai');
    const bankaiBadge = document.getElementById('badge-bankai');
    shikaiBadge.className = 'badge'; 
    bankaiBadge.className = 'badge';
    if (hasShikai) shikaiBadge.classList.add('active');
    if (hasBankai) bankaiBadge.classList.add('active');

    document.getElementById('char-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}


function toggleRelease(type, btnElement) {

    const modalText = document.getElementById('modal-desc');
    

    const allContents = modalText.querySelectorAll('.release-content');
    allContents.forEach(div => div.style.display = 'none');


    const targetClass = type + '-content'; 
    const targetDiv = modalText.querySelector('.' + targetClass);

    if (targetDiv) {
        targetDiv.style.display = 'block';

        targetDiv.style.animation = 'none';
        targetDiv.offsetHeight;
        targetDiv.style.animation = 'fadeUp 0.5s';
    }
}

function closeCharModal() {
    document.getElementById('char-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

window.onclick = function(event) {
    const modal = document.getElementById('char-modal');
    if (event.target == modal) closeCharModal();
}