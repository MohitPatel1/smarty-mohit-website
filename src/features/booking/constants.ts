/** Zoho Bookings service "1-on-1 with Mohit": free, 30 minutes, online. */
const ZOHO_BOOKINGS_SITE = 'https://smartagentindia.zohobookings.in';
const ONE_ON_ONE_SERVICE_ID = '488776000000031136';

/** Zoho's full page refuses to be framed (X-Frame-Options: DENY); this route is the one it allows. */
export const BOOKING_EMBED_URL = `${ZOHO_BOOKINGS_SITE}/portal-embed#/${ONE_ON_ONE_SERVICE_ID}`;
export const BOOKING_PAGE_URL = `${ZOHO_BOOKINGS_SITE}/${ONE_ON_ONE_SERVICE_ID}`;
export const BOOKING_ROUTE = '/book';
