import refs from './refs';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import 'pnotify/dist/PNotifyBrightTheme.css';

import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'material-design-icons/iconfont/material-icons.css';

import 'animate.css/animate.min.css';

PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

export function pnotifyAlert() {
  PNotify.alert({
    text: 'Too many matches found. Please enter a more specific query!',
  });

  // refs.infoAlert.classList.add('animate__animated', 'animate__wobble');
}

export function pnotifyError() {
  PNotify.error({
    text: 'Error',
  });

  // refs.infoAlert.classList.add('animate__animated', 'animate__wobble');
}

// ======================== пример подключение =========================

// PNotify.alert('Notice me, senpai!');

// // Manually set the type.
// PNotify.alert({
//   text: "I'm an alert.",
//   type: 'notice',
// });

// // Automatically set the type.
// PNotify.notice({
//   text: "I'm a notice.",
// });
// PNotify.info({
//   text: "I'm an info message.",
// });
// PNotify.success({
//   text: "I'm a success message.",
// });
// PNotify.error({
//   text: 'Too many matches found. Please enter a more specific query!',
// });

// ================================================================
