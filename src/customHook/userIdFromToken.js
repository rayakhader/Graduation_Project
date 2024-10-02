import { jwtDecode } from 'jwt-decode';

function userIdFromToken(token,setUserId) {
  if (token) {
    const decoded = jwtDecode(token);
    const userId = decoded['userId'];
    setUserId(userId);
  }
  else return
}
export default userIdFromToken