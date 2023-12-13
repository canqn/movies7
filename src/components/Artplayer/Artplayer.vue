<template>
  <div id="player-id" ref="artRef"></div>
</template>

<script>
import Artplayer from 'artplayer';
import Hls from 'hls.js';

export default {
  props: {
    option: {
      type: Object,
      required: true
    },
    playlist: {
      type: Array,
      required: true
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      instance: null,
      currentUrl: '', // Thêm một trường dữ liệu để lưu trữ URL hiện tại
      currentIndex: this.initialIndex, // Thêm currentIndex vào dữ liệu
      playlistLength: this.playlist.length // Lưu độ dài của danh sách phát
    };
  },
  watch: {
    'option.url'(newUrl, oldUrl) {
      // Xử lý khi URL thay đổi
      if (newUrl !== this.currentUrl) {
        // Nếu URL mới khác với URL hiện tại
        if (this.instance) {
          // Dừng và hủy trình phát video hiện tại
          this.instance.destroy(false);
        }
        // Lưu trữ URL mới vào currentUrl và tạo lại trình phát video
        this.currentUrl = newUrl;
        this.currentIndex = this.initialIndex;
        this.createPlayer();
      }
    }

    // currentIndex(newIndex) {
    //   if (newIndex >= 0 && newIndex < this.playlistLength) {
    //     this.currentUrl = this.playlist[newIndex];
    //     // console.log('end');
    //     // this.createPlayer();
    //   }
    // }
  },

  mounted() {
    this.currentUrl = this.playlist[this.currentIndex];
    this.createPlayer();
  },
  beforeUnmount() {
    this.destroyPlayer();
  },

  methods: {
    createPlayer() {
      this.currentUrl = this.option.url; // Lưu trữ URL hiện tại
      this.instance = new Artplayer({
        ...this.option,
        container: this.$refs.artRef,
        customType: {
          m3u8: this.playM3u8
        }
      });
      // Listen to video end event
      this.instance.on('video:ended', (state) => {
        console.info('ended', state);
        // this.currentUrl = this.playlist[3];
        // console.info(this.currentUrl, this.playlist);
        this.moveToNextVideo();
      });

      // this.instance.on('ended', () => {
      //   console.log('next-video');
      //   this.moveToNextVideo();
      // });

      this.$nextTick(() => {
        this.$emit('get-instance', this.instance);
      });
    },
    destroyPlayer() {
      if (this.instance && this.instance.destroy) {
        this.instance.destroy(false);
      }
    },

    moveToNextVideo() {
      console.log(this.currentIndex);
      this.currentIndex = this.currentIndex + 1;
      // this.currentUrl = this.playlist[this.currentIndex];
      if (this.currentIndex < this.playlistLength) {
        this.$emit('video-ended', this.currentIndex, this.currentUrl);
      }
      // this.createPlayer();
      // this.playNewVideo(this.currentUrl);
    },

    playM3u8(video, url, art) {
      if (Hls.isSupported()) {
        if (art.hls) art.hls.destroy();
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        art.hls = hls;
        art.on('destroy', () => hls.destroy());
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
      } else {
        art.notice.show = 'Unsupported playback format: m3u8';
      }
    }
  }
};
</script>

<style>
#player-id {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
}
</style>
