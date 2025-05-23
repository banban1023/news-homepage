<template>
  <transition name="fade">
    <div class="popup-mask" v-if="visible" @click.self="handleClose">
      <div class="popup-content">
        <slot></slot>
        <button class="popup-close" @click="handleClose">×</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PopupVue',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    visible: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleClose () {
      this.visible = false
    }
  }
}
</script>

<style scoped>
.popup-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-content {
  background: hsl(36, 100%, 99%);
  padding: 150px 25px 0;
  right: 0;
  position: absolute;
  min-width: 258px;
  height: 100%;
  line-height: 50px;
  font-size: 18px;
  font-weight: 500;
}

.popup-close {
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 65px;
  font-weight: 200;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
