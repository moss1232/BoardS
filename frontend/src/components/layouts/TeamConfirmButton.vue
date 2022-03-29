<script>
import { mapActions } from "vuex";

export default {
  // props: [

  //   dialog,
  //   password,
  //   name
  // ],
  // data: () => ({
  // }),
  methods: {
    ...mapActions("messages", ["createMessage"]),
    closeDialog() {
      this.name = null;
      this.files = null;
    },

    //     async searchTeam(team) {
    //   const res = {
    //     data: "",
    //   };
    //   await new Promise((resolve, reject) => {
    //     axios
    //       .post("https://board-rails-backend.herokuapp.com/api/teams", team, {
    //         headers: {
    //           uid: window.localStorage.getItem("uid"),
    //           "access-token": window.localStorage.getItem("access-token"),
    //           client: window.localStorage.getItem("client"),
    //         },
    //       })
    //   }
    //   );
    // },
    //   async submit() {
    //     const params = new FormData();
    //     params.append("name", this.name);
    //     params.append("password", this.password);
    //     this.closeDialog();
    //   },
  },
};
</script>
