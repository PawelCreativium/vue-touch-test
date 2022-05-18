<script setup lang="ts">
const onTapItem = (mouseEvent: any) => {
  // you can remove the `mouseEvent` argument
  console.log('Tapped!');
  console.log('mouseEvent: ', mouseEvent);
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="test-button">test</div>

  <div class="d-flex flex-column"><span v-touch:tap="onTapItem">Tap Me</span>

  <!-- tap is the default event, you can omit it -->
  <span v-touch="onTapItem">Tap Me</span>

  <!-- bind the swipe event, no matter direction -->
  <span v-touch:swipe="onTapItem">Swipe Here</span>

  <!-- only when swipe left can trigger the callback -->
  <span v-touch:swipe.left="onTapItem">Swipe Left Here</span>

  <!-- bind a long tap event -->
  <span v-touch:longtap="onTapItem">Long Tap Event</span>

  <!-- bind a start and end event -->
  <span v-touch:press="onTapItem" v-touch:release="onTapItem">Press and Release Events</span>

  <!-- bind a move and moving event -->
  <span v-touch:drag.once="onTapItem">Triggered once when starting to move and tapTolerance is exceeded</span>
  <span v-touch:drag="onTapItem">Continuously triggered while dragging</span>

  <!-- touch and hold -->
  <span v-touch:hold="onTapItem">Touch and hold on the screen for a while</span>

  <!-- you can even mix multiple events -->
  <span
    v-touch:tap="onTapItem"
    v-touch:longtap="onTapItem"
    v-touch:swipe.left="onTapItem"
    v-touch:press="onTapItem"
    v-touch:release="onTapItem"
    v-touch:swipe.right="onTapItem"
    >Mix Multiple Events</span
  >

  <!-- using different options for specified element -->
  <span v-touch:tap="onTapItem" v-touch-options="{ touchClass: 'active', swipeTolerance: 80, touchHoldTolerance: 300 }"
    >Different options</span
  >

  <!-- customize touch effects by CSS class -->
  <span v-touch:tap="onTapItem">Customize touch class</span>
  <!-- or -->
  <span v-touch:tap="onTapItem" v-touch-options="{ touchClass: 'active' }">Customize touch class</span></div>

  <div class="row mt-5"></div>
</template>

<style></style>
