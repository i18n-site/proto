import S from '~/lib/S.js'
import {Bill as _Bill,Setup as _Setup,Topup as _Topup,Topuped as _Topuped,BillIndex as _BillIndex} from './proto.js'
/**
 * @param {i32} month
*/
export const payBill = async (month)=>_Bill(await S.payBill(month))

export const payBind = async ()=>_Setup(await S.payBind())

/**
 * @param {u8} synced
*/
export const payLi = async (synced)=>_Topup(await S.payLi(synced))

/**
 * @param {u64} id
*/
export const payRm = (id)=>S.payRm(id)

/**
 * @param {u64} id
*/
export const paySetDefault = (id)=>S.paySetDefault(id)

/**
 * @param {u64} n
 * @param {u64} card
*/
export const payTopup = async (n,card)=>_Topuped(await S.payTopup(n,card))

export const pay = async ()=>_BillIndex(await S.pay())

export const {paySetup} = S