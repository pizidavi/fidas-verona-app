// GET
export const GET_LATEST_RELEASE = 'https://api.github.com/repos/:repo/releases/latest';
export const GET_COMPANY = '/:companyId.json';

// POST
export const POST_ACCOUNT_SALT = '/:companyId/accountsalts.json';

// Secure
// GET
export const GET_USER = '/company/:companyId/profile/:userId/profile';

// POST
export const POST_LOGIN = '/checkloginwsse';
