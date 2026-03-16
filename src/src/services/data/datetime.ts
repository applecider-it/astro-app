/** ローケルごとの日時表記 */
export function toLocaleString(date: Date) {
  return date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
  });
}
