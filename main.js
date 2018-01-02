var el = document.getElementById('djs');
if (el) {
    el.style.display='none';
    el.innerHTML = 0;
}


el = document.getElementById('yytf');
if (el) {
    el.style.display = 'none';
    el.classList.remove('yytf_1');
    el.classList.add('yytf_2');
}


el = document.getElementById('hddbox');
if (el) {
    el.style.pointerEvents = 'auto';
}

// rapidvideo
el = document.getElementById("top350");
if (el) {
    el.parentNode.removeChild(el);
} else {
    console.log("not found", document);
}

el = document.getElementById("top350b");
if (el) {
    el.parentNode.removeChild(el);
}
