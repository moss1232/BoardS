<template>
  <v-container fill-height>
    <v-card width="400px" class="mx-auto">
      <v-card-text> 
        <v-form>
          <v-text-field 
            prepend-icon="mdi-email" 
            label="メールアドレス" 
            v-model="name" 
          />
          <v-text-field 
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock" 
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            v-model="password"
          />
          <v-container>
            <v-row justify="center">
              <v-col
                cols="12"
                sm="6"
              >
                <div class="text-center">
                  <v-btn class="info" @click="submit">ログイン</v-btn>
                  <v-btn text>新規登録はこちら</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

export default {
  data(){
    return {
      showPassword : false,
      name:'',
      password:'',
    }
  },
    methods:{
    submit(){
      console.log(this.name,this.password)
    }
  }
};
    </script>