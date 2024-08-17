import {default as $decode,li as $li} from '@3-/proto/decode.js'
import {u32 as $u32,u64 as $u64,i32 as $i32,i64 as $i64,string as $string,i32Li as $i32Li} from '@3-/proto/decode/types.js'
import BIN1 from "@3-/proto/decode/BIN1.js"

export const Item /*
  0 cid	u32
  1 kid	u64
  2 rid	u64
  3 day	i32
  4 n  	i64
*/ = $decode(
  [$u32,$u64,$u64,$i32,$i64],
  [0,0,0,0,0]
)

export const Bill /*
  0 li	[Item]
*/ = $li(Item)


export { default as Cash /*
  0 n	i64
*/} from '@3-/proto/decode/i64.js'
export const Ing /*
  0 id	u64
  1 n 	u64
*/ = $decode(
  [$u64,$u64],
  [0,0]
)

export const Card /*
  0 id     	u64
  1 brandId	u32
  2 exp    	u32
  3 status 	u32
  4 name   	string
*/ = $decode(
  [$u64,$u32,$u32,$u32,$string],
  [0,0,0,0,""]
)

export const Brand /*
  0 id  	u32
  1 name	string
*/ = $decode(
  [$u32,$string],
  [0,""]
)

export const Setup /*
  0 mail    	string
  1 stripePk	string
*/ = $decode(
  [$string,$string],
  ["",""]
)

export const Topuped /*
  0 n     	u64
  1 rate  	u64
  2 status	u32
*/ = $decode(
  [$u64,$u64,$u32],
  [0,0,0]
)

export const Topup /*
  0 cardLi 	[Card]
  1 brandLi	[Brand]
  2 setup  	Setup
  3 rate   	u64
*/ = $decode(
  [Card,Brand,Setup,$u64],
  [1,1,Setup(BIN1),0]
)

export const BillIndex /*
  0 cash   	i64
  1 li     	[Item]
  2 monthLi	[i32Li]
  3 ing    	[Ing]
*/ = $decode(
  [$i64,Item,$i32Li,Ing],
  [0,1,2,1]
)