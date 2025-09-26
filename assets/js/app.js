
// Very small chart without external libs (ASCII-like)
function tinyBarChart(elId, values = []) {
  const el = document.getElementById(elId);
  if (!el) return;
  const max = Math.max(...values, 1);
  const bars = values.map(v => {
    const width = Math.round((v / max) * 100);
    return `<div style="display:flex;align-items:center;gap:8px;margin:6px 0;">
      <div class="badge" style="width:48px;text-align:center">${v}</div>
      <div style="height:12px;flex:1;background:#0f172a;border:1px solid var(--border);border-radius:8px;overflow:hidden;">
        <div style="height:100%;width:${width}%;background:linear-gradient(90deg, var(--accent), var(--accent-2));"></div>
      </div>
    </div>`;
  }).join("");
  el.innerHTML = bars;
}

document.addEventListener("DOMContentLoaded", () => {
  // Example demo data
  tinyBarChart("trafficChart", [12, 22, 18, 30, 25, 28, 40]);
  tinyBarChart("alertsChart", [1, 3, 2, 4, 1, 0, 5]);
});
