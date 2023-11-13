window.onscroll = function() {
    toggleScrollTopButton();
};

function toggleScrollTopButton() {
    var button = document.getElementById('scroll');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

document.getElementById('scroll').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
