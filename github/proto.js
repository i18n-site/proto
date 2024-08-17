import {default as $decode} from '@3-/proto/decode.js'
import {string as $string,u64 as $u64,u32 as $u32,i64 as $i64} from '@3-/proto/decode/types.js'

export const GithubUser /*
  0 name	string
  1 mail	string
*/ = $decode(
  [$string,$string],
  ["",""]
)

export const GithubMail /*
  0 id  	u64
  1 mail	string
*/ = $decode(
  [$u64,$string],
  [0,""]
)

export const GithubBonus /*
  0 state  	u32
  1 asset  	i64
  2 authUrl	string
*/ = $decode(
  [$u32,$i64,$string],
  [0,0,""]
)