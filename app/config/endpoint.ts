// GET
export const GET_DONOR = '/donor';
export const GET_DONATIONS = '/donations';

export const GET_COMPANY = '/:companyId.json';
export const GET_PUBBLICATIONS = '/:companyId/publications.json';
export const GET_EVENTS = '/:companyId/events.json';
export const GET_ATTACHMENT = '/downloadcompany/:companyId/downloadeventfile/:fileId';

// POST
export const POST_REGISTER_DEVICE = '/register';
export const POST_LOGIN = '/auth';

// Extra
// GET
export const GET_LATEST_RELEASE = 'https://api.github.com/repos/:repo/releases/latest';
export const GET_RELEASES = 'https://api.github.com/repos/:repo/releases';
