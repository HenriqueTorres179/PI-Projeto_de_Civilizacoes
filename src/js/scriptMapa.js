// ! Feito com IA !
const affectedRegions = [
    { key: "muito-alta", side: "egito-ant", name: "Egito Antigo" },
    { key: "alta1", side: "mesopotamia", name: "Mesopotâmia" },
    { key: "alta2", side: "imp-romano", name: "Império Romano" },
    { key: "ampla", side: "china-ant", name: "China Antiga" },
    { key: "significativa", side: "meso-and", name: "Mesoamérica e Andes" },
    ];
let activeIndex = null;
function getMapButtonByKey(key) {
    return document.querySelector(`.map button.${key}`);
}
function getSideButtonByClass(sideClass) {
    return document.querySelector(`.gran-sis-regs button.${sideClass}`);
}
function clearActive() {
    document.querySelectorAll('.map button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.gran-sis-regs button').forEach(b => b.classList.remove('active'));
}
function setActivePairByIndex(index) {
    const region = affectedRegions[index];
    if (!region) return;
    const mapBtn = getMapButtonByKey(region.key);
    const sideBtn = getSideButtonByClass(region.side);
    if (mapBtn) mapBtn.classList.add('active');
    if (sideBtn) sideBtn.classList.add('active');
}
window.toggleRegion = function(regionKey) {
    const index = affectedRegions.findIndex(r => r.key === regionKey);
    if (index === -1) return;
    if (activeIndex === index) {
        clearActive();
        activeIndex = null;
        return;
    }
    clearActive();
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
        setActivePairByIndex(index);
        activeIndex = index;
        });
    });
};
window.toggleRegionBySide = function(sideClass) {
    const index = affectedRegions.findIndex(r => r.side === sideClass);
    if (index === -1) return;
    if (activeIndex === index) {
        clearActive();
        activeIndex = null;
        return;
    }
    clearActive();
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
        setActivePairByIndex(index);
        const sideBtn = getSideButtonByClass(sideClass);
        if (sideBtn && typeof sideBtn.scrollIntoView === 'function') {
            sideBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
        activeIndex = index;
        });
    });
};