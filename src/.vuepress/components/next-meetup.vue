<template>
  <div class="next-meetup">
    <a :href="href" target="_blank" rel="noopener noreferrer">
      Next&nbsp;meetup&nbsp;on <span v-html="niceDate" /><OutboundLink/>
    </a>
  </div>
</template>

<script>
const URLprefix = 'https://www.meetup.com/de-DE/Vue-js-Berlin/events'
import meetupList from '../../meetups/meetups.json'

const days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export default {
  name: 'next-meetup',
  computed: {
    upcoming () {
      const now = Date.now()
      return meetupList.find(meetup => Date.parse(meetup.date) > now)
    },
    href () {
      const id = this.upcoming.id
      return id ? `${URLprefix}/${id}/` : this.upcoming.url
    },
    upcomingDate () {
      return new Date(this.upcoming.date)
    },
    daySuffix () {
      switch (this.upcomingDate) {
        case 1: return 'st'
        case 2: return 'nd'
        case 3: return 'rd'
        default: return 'th'
      }
    },
    niceDate () {
      // the joy of the javascript date object
      const d = this.upcomingDate
      const day = (`0${d.getDate()}`).slice(-2)
      const dayName = days[d.getDay()]
      const suf = this.daySuffix
      const monthName = months[d.getMonth()]
      const year = d.getFullYear()
      return `${dayName}, ${day}${suf}&nbsp;of&nbsp;${monthName} ${year}`
    }
  }
}
</script>

<style scoped>
.next-meetup {
  width: 100%;
  max-width: 560px;
  margin: auto;
  font-size: 2em;
}
.next-meetup a > svg {
  position: absolute;
}
</style>
