/** ルーム情報取得 */
export function getRoomInfo(params: any) {
  const rooms = ['room1', 'room2', 'room3'];

  let room = String(params.get('room'));
  if (!rooms.includes(room)) room = rooms[0];

  return { room, rooms };
}
