import S from '~/lib/S.js'
import {GithubBonus as _GithubBonus} from './proto.js'
/**
 * @param {String} github_user_id
*/
export const github = async (github_user_id)=>_GithubBonus(await S.github(github_user_id))
