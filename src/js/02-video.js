import Player from '@vimeo/player';
import lodash from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  lodash(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(localStorage.getItem('videoplayer-current-time'));
  }, 1000)
);

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
