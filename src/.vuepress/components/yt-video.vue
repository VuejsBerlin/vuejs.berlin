<template>
  <youtube player-width="100%" player-height="auto" :video-id="videoId" />
</template>

<script>
export default {
  name: 'yt-video',
  props: {
    videoId: {type: String, required: true}
  }
}
</script>
