export function getEventTarget(e) {
  return (e.target.shadowRoot && e.composed) ? (e.composedPath()[0] || e.target) : e.target;
}