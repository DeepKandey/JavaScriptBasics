
var user = 'testprep';

switch (user) {
    case 'admin':
        console.log("You  get the full access");
        break;
    case 'subadmin':
        console.log("gets acess to create/delete courses");
        break;
    case 'testprep':
        console.log("gets acess to create/delete tests");
        break;
    case 'user':
        console.log("gets acess to consume content");
        break;
    default:
        console.log("Trial User");
        break;
}