const affectedRegions = [
    { key: "alto", side: "africa-sub", name: "África Subsaariana" },
    { key: "medio1", side: "asia-med", name: "Ásia Meridional" },
    { key: "medio2", side: "asia-oci", name: "Ásia Ocidental" },
    { key: "moderado", side: "ame-lat-car", name: "América Latina e Caribe" },
    { key: "baixo", side: "eu-ori", name: "Europa Oriental" },
    ];
let activeIndex = null;
function getMapButtonByKey(key) {
    return document.querySelector(`.map button.${key}`);
}
function getSideButtonByClass(sideClass) {
    return document.querySelector(`.reg-vul-regs button.${sideClass}`);
}
function clearActive() {
    document.querySelectorAll('.map button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.reg-vul-regs button').forEach(b => b.classList.remove('active'));
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