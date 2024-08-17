import C from '@8p/captcha'
import S from '~/lib/S.js'
import {ConfMeta as _ConfMeta,User as _User,UserStateLi as _UserStateLi,Mail as _Mail,Uid as _Uid} from './proto.js'
/**
 * @param {u64} uid
*/
export const authConfMeta = async (uid)=>_ConfMeta(await S.authConfMeta(uid))

/**
 * @param {u64} uid
*/
export const authExit = async (uid)=>_User(await S.authExit(uid))

export const authLi = async ()=>_UserStateLi(await S.authLi())

export const authMe = async ()=>_User(await S.authMe())

/**
 * @param {u64} uid
 * @param {String} name
*/
export const authName = (uid,name)=>S.authName(uid,name)

/**
 * @param {u64} uid
 * @param {String} new_mail
*/
export const authNewMail = async (uid,new_mail)=>_Mail(await C.authNewMail(uid,new_mail))

/**
 * @param {String} fingerprint
 * @param {String} account
 * @param {String} passwd
 * @param {String} code
*/
export const authPasswd = async (fingerprint,account,passwd,code)=>_User(await S.authPasswd(fingerprint,account,passwd,code))

/**
 * @param {String} account
 * @param {String} password
*/
export const authReset = (account,password)=>C.authReset(account,password)

/**
 * @param {u64} uid
*/
export const authRm = async (uid)=>_User(await S.authRm(uid))

/**
 * @param {u64} uid
*/
export const authSet = async (uid)=>_User(await S.authSet(uid))

/**
 * @param {u64} uid
 * @param {String} new_mail
 * @param {Option<String>} old_code
 * @param {String} new_code
*/
export const authSetMail = (uid,new_mail,old_code,new_code)=>S.authSetMail(uid,new_mail,old_code,new_code)

/**
 * @param {String} fingerprint
 * @param {String} account
 * @param {String} passwd
 * @param {String} verify_code
 * @param {String} name
*/
export const authSignUp = async (fingerprint,account,passwd,verify_code,name)=>_Uid(await S.authSignUp(fingerprint,account,passwd,verify_code,name))

/**
 * @param {String} fingerprint
 * @param {u8} action
 * @param {String} account
 * @param {String} password
*/
export const auth = async (fingerprint,action,account,password)=>_User(await C.auth(fingerprint,action,account,password))

export const {authExitAll,authLang} = S