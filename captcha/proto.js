import {nodefault as $nodefault} from '@3-/proto/decode.js'
import {u64 as $u64,bytes as $bytes,string as $string} from '@3-/proto/decode/types.js'

export const Captcha /*
  0 id   	u64
  1 img  	bytes
  2 svgLi	[string]
*/ = $nodefault([$u64,$bytes,$string],[2])