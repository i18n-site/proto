import S from '~/lib/S.js'
/**
 * @param {String} endpoint
 * @param {String} auth
 * @param {String} p256dh
 * @param {String} lang
*/
export const webpush = (endpoint,auth,p256dh,lang)=>S.webpush(endpoint,auth,p256dh,lang)
