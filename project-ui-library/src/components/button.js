'use strict';

export default function button(text = `Click Here`, className = `btn`) {
  return `<button class="${className}">${text}</button>`;
}
