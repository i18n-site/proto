import {default as $decode,li as $li} from '@3-/proto/decode.js'
import {u64 as $u64,string as $string,bool as $bool} from '@3-/proto/decode/types.js'

export const Token /*
  0 id    	u64
  1 name  	string
  2 sk    	string
  3 enable	bool
*/ = $decode(
  [$u64,$string,$string,$bool],
  [0,"","",false]
)

export const TokenLi /*
  0 li	[Token]
*/ = $li(Token)


export { default as Sk /*
  0 v	string
*/} from '@3-/proto/decode/string.js'