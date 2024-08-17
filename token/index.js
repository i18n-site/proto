import S from '~/lib/S.js'
import {Token as _Token,Sk as _Sk,TokenLi as _TokenLi} from './proto.js'
/**
 * @param {String} name
*/
export const tokenNew = async (name)=>_Token(await S.tokenNew(name))

/**
 * @param {u64} token_id
*/
export const tokenRefresh = async (token_id)=>_Sk(await S.tokenRefresh(token_id))

/**
 * @param {u64} token_id
*/
export const tokenRm = (token_id)=>S.tokenRm(token_id)

/**
 * @param {u64} id
 * @param {i8} enable
*/
export const tokenTurn = (id,enable)=>S.tokenTurn(id,enable)

export const token = async ()=>_TokenLi(await S.token())
