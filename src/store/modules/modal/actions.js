export function showModal() {
  return { type: '@cart/MODAL_SHOW' };
}

export function hideModal(clear) {
  return { type: '@cart/MODAL_HIDE', clear };
}
