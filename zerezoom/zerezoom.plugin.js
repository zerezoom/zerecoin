/**
* @name zerezoom
* @description zerezoom
* @author zerezoom
* @version zerezoom
* @invite zerezoom
*/

module.exports = class ZereZoom {start() {
        BdApi.showToast('zere_zoom');
        BdApi.showConfirmationModal('zere_zoom', 'zere_zoom', {cancelText: 'zere_zoom', confirmText: 'zere_zoom'});
        const zerezoom = 'https://cdn.discordapp.com/emojis/477825238172958730.png?v=1';
        const zerezoom2 = document.querySelectorAll('[class^="userName" i], .title-29uC1r, .topic-TCb_qw, .roleColor-rz2vM0, .name-1jkAdW, .channelName-2YrOjO, .overflow-WK9Ogt, .markup-2BOw-j, .textContent-3N7xXx');
        const zerezoom3 = document.querySelectorAll('[style*="background-image"]');
        const zerezoom4 = document.getElementsByTagName('img');
        for (const zere_zoom of zerezoom2) {
            zere_zoom.innerText = ':zere_zoom:';
        }
        for (const zere_zoom of zerezoom3) {
            zere_zoom.style.backgroundImage = `url(${zerezoom})`;
        }
        for (const zere_zoom of zerezoom4) {
            zere_zoom.src = zerezoom;
        }
    }
    stop() {
        console.log(zere_zoom);
    }
}
