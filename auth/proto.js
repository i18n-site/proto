import {default as $decode,li as $li} from '@3-/proto/decode.js'
import {u64 as $u64,u32 as $u32,string as $string,bool as $bool} from '@3-/proto/decode/types.js'

export { default as Uid /*
  0 id	u64
*/} from '@3-/proto/decode/u64.js'
export const User /*
  0 id  	u64
  1 ver 	u64
  2 lang	u32
  3 name	string
*/ = $decode(
  [$u64,$u64,$u32,$string],
  [0,0,0,""]
)

export const UserState /*
  0 id     	u64
  1 name   	string
  2 account	string
  3 exit   	bool
*/ = $decode(
  [$u64,$string,$string,$bool],
  [0,"","",false]
)

export const UserStateLi /*
  0 li	[UserState]
*/ = $li(UserState)


export { default as Mail /*
  0 mail	string
*/} from '@3-/proto/decode/string.js'

export { default as ConfMeta /*
  0 mail	string
*/} from '@3-/proto/decode/string.js'