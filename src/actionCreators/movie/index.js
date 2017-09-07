/**
 * Created by guangqiang on 2017/9/5.
 */

import {getFetch, postFetch} from '../../utils/network/request/HttpExtension'
import {PATH} from '../../constants/urls'

movieList = (id, params) => getFetch(`${PATH.MOVIE_LIST}${id}`, params)
movieDetail = params => getFetch(`${PATH.MOVIE_DETAIL}${params}`, params)
movieStory = params => getFetch(`/movie/${params}/story/1/0`, params)

export default {
  movieList,
  movieDetail,
  movieStory
}