import moment from 'moment'

export const displayDate = date => {
  return moment(date, 'YYYY-MM-DD HH:mm Z').format('YYYY-MM-DD')
}

export const metaDate = date => {
  return moment(date, 'YYYY-MM-DD HH:mm Z').toISOString()
}

export const flickrDate = date => {
  return moment(date, 'YYYY-MM-DD HH:mm:ss').format('Do MMMM YYYY')
}

export const youtubeThumb = id => {
  return `http://i.ytimg.com/vi/${id}/maxresdefault.jpg`
}
