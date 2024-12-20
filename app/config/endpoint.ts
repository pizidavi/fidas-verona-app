// GET
export const GET_COMPANY = '/:companyId.json';
export const GET_PUBBLICATIONS = '/:companyId/publications.json';
export const GET_EVENTS = '/:companyId/events.json';
export const GET_ATTACHMENT = '/downloadcompany/:companyId/downloadeventfile/:fileId';

// POST
export const POST_ACCOUNT_SALT = '/:companyId/accountsalts.json';

// Secure
// GET
export const GET_USER = '/company/:companyId/profile/:userId/profile';

// POST
export const POST_LOGIN = '/checkloginwsse';

// Extra
// GET
export const GET_LATEST_RELEASE = 'https://api.github.com/repos/:repo/releases/latest';
export const GET_RELEASES = 'https://api.github.com/repos/:repo/releases';
