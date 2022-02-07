<template>
<div>

  <messageList/>
  <!-- <message-detail-dialog v-if="event !== null && isEditMode" /> -->
</div>
</template>

<script>
// import MessageDetailDialog from '../forms/MessageDetailDialog.vue'
import MessageList from '../layouts/MessageList.vue'

export default {
  components: { MessageList },
  data: () => ({
  }),
}
</script>