document.getElementById('showPanelBtn').addEventListener('click', function() {
    document.getElementById('textPanel').classList.remove('hidden');
});

document.getElementById('closePanelBtn').addEventListener('click', function() {
    document.getElementById('textPanel').classList.add('hidden');
});
