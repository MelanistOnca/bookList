// heavily inspired by tutorial https://github.com/rajaraodv/react-redux-blog
const user = {
  'user': {
    'id': '',
    'admin': false,
    // 'createdAt': '', //not sure if i need this for this scale project?
    'email': '',
    // 'hasVerifiedEmail': false, //definitely not using this right now
    'first_name': '',
    'middle_name': '',
    'last_name': '',
    // 'updatedAt': '',
    'username': ''
  },
  'error': null,
  'loading': false,
  'status': 'initial state'
}

// the following was the user info found in the ProfileCard component of the tutorial page after logging in, as a prop:
//
// user: {
//   error: null,
//   loading: false,
//   status: "authenticated",
//   user: {
//     _id: "5802c28ecf529e1100b3dab2",
//     admin: false,
//     createdAt: "2016-10-15T23:58:06.505Z",
//     email: "patrick.m.professional+reduxuserauthtutorial@gmail.com",
//     isEmailVerified: true,
//     name: "doopy",
//     updatedAt: "2016-10-15T23:59:41.471Z",
//     username: "doopier"
//   }
// }

export default user;
