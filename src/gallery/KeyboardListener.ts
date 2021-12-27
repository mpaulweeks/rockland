export type KeyboardCallback = (evt: KeyboardEvent) => void;

class _KeyboardListenerSingleton {
  private cb: KeyboardCallback = () => { };

  constructor() {
    document.addEventListener('keydown', evt => this.onKeyDown(evt));
  }
  private onKeyDown(evt: KeyboardEvent) {
    this.cb(evt);
  }

  setCallback(cb: KeyboardCallback) {
    this.cb = cb;
  }
}

export const KEYBOARD = new _KeyboardListenerSingleton();
