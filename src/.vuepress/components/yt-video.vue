<template>
  <youtube :player-width="width" :player-height="height" :video-id="videoId" />
</template>

<script>
export default {
  name: 'yt-video',
  props: {
    videoId: {type: String, required: true}
  },
  computed: {
    width () {
      // TODO: support window resize?
      const parentEl = this.$parent.$el
      return parentEl ? parentEl.clientWidth : 640
    },
    height () {
      return Math.round(this.width * 0.5625)
    }
  }
}
</script>
