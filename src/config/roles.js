// const allRoles = {
//   user: ['user'],
//   artist: ['consumedByArtistOnly'],
//   admin: ['getUsers', 'manageUsers'],
// };
const roles = ['user', 'organization', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['manageUsers','logout']);
roleRights.set(roles[1], ['consumedByOrganizationOnly', 'manageUsers','logout']);
roleRights.set(roles[2], ['manageUsers','consumedByOrganizationOnly','consumedByAdminOnly','logout']);

module.exports = {
  roles,
  roleRights,
};
