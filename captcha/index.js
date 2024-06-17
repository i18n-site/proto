import S from '~/lib/S.js'
import {Captcha as _Captcha} from './proto.js'
export const captcha = async ()=>_Captcha(await S.captcha())
