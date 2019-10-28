<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark>
            <v-toolbar-title>Авторизация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                name="name"
                label="Имя пользователя"
                type="name"
                v-model="name"
                :rules="nameRules"
                @input="onInput"
              ></v-text-field>
              <v-text-field
                name="password"
                label="Пароль"
                type="password"
                v-model="password"
                :rules="passwordRules"
                @input="onInput"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer class="red--text">{{errMessage}}</v-spacer>
            <v-btn
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >Вход
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const sName = 'student';
  const sPass = 'sdemo';
  const tName = 'teacher';
  const tPass = 'tdemo';
  export default {
    data() {
      return {
        name: '',
        password: '',
        valid: false,
        nameRules: [
          v => !!v || 'Введите имя пользователя',
        ],
        
        passwordRules: [
          v => !!v || 'Введите пароль',
        ],
        
        studentData:
          {
            name: 'student',
            pass: 'sdemo'
          },
  
        teacherData:
          {
            name: 'teacher',
            pass: 'tdemo'
          },
        
        errMessage: ''
      }
    },
    methods: {
      onSubmit() {
        if (this.$refs.form.validate()) {
          const user = {
            name: this.name,
            password: this.password
          };
          
          if ((user.name === this.studentData.name) && (user.password === this.studentData.pass)) {
            this.$router.push('/student')
          }
  
          if ((user.name === this.teacherData.name) && (user.password === this.teacherData.pass)) {
            this.$router.push('/teacher')
          }
          
          else {
            this.errMessage = 'Неверное имя пользователя или пароль!'
          }
        }
      },
      
      onInput() {
        this.errMessage = ''
      }
    },
  }
</script>
