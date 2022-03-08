<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-slide-y-transition class="py-0" group tag="v-list">
            <template v-for="(task, i) in tasks">
              <v-list-item :key="`${i}-${task.text}`">
                <v-list-item-action>
                  <v-checkbox
                    v-model="task.done"
                    :color="(task.done && 'grey') || 'primary'"
                  >
                    <template v-slot:label>
                      <div
                        :class="(task.done && 'grey--text') || 'primary--text'"
                        class="ml-4"
                        v-text="task.text"
                      ></div>
                    </template>
                  </v-checkbox>
                </v-list-item-action>
                <v-spacer></v-spacer>
              </v-list-item>
            </template>
          </v-slide-y-transition>
        </v-card>
      </v-col>
    </v-row>

    <v-footer app height="72" inset>
      <v-container>
        <v-row>
          <v-col>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="newTask"
                    solo
                    @keydown.enter.prevent="create"
                    label="Message"
                    type="text"
                    append-icon="mdi-send"
                  >
                    <template v-slot:append>
                      <v-fade-transition>
                        <v-icon v-if="newTask" @click="create">
                          mdi-plus-circle
                        </v-icon>
                      </v-fade-transition>
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tasks: [
      {
        done: false,
        text: "Foobar",
      },
      {
        done: false,
        text: "Fizzbuzz",
      },
    ],
    newTask: null,
  }),

  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    },
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.newTask,
      });

      this.newTask = null;
    },
  },
};
</script>
