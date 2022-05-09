
const authHeader = () => {
  const token = localStorage.getItem('LibelAcademyToken');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
}


export default authHeader;