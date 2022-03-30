<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("messages", ["createMessage"]),
    closeDialog() {
      this.name = null;
      this.files = null;
    },
  },
};
</script>
