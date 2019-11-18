import { helper } from '@ember/component/helper';

export function formatTime(value) {
    // console.log(new Date(parseInt(value)));
  let dateStr = new Date(parseInt(value)).toISOString().slice(0, 19).replace('T', ' ');
  return dateStr;
}

export default helper(formatTime);