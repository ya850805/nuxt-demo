<template>
  <div>
<!--    <NuxtWelcome />-->

    <!-- Ensure the chat is rendered client-side -->
<!--    <client-only>-->
<!--      <nuxt-facebook-chat :options="options" />-->
<!--    </client-only>-->

    <h1>hello {{name}}</h1>
    <input v-model="name">
    <cs>組件～</cs>
  </div>
</template>

<script setup lang="ts">
// import { NuxtFacebookChatOptions } from 'nuxt-facebook-chat';
//
// // Define your chat options
// const options: NuxtFacebookChatOptions = {
//   pageId: "122487314278162",  // Your Facebook Page ID
//   locale: "zh_TW",            // Set the locale for the chat
//   themeColor: "#6699cc",      // Customize the chat theme color,
//   loggedOutGreeting:"嗨~有問題可以私訊我喔！", //登入狀態歡迎詞
//   loggedInGreeting:"您好，很高興為您服務" //登出(未登入)狀態歡迎詞
// };

import {ref} from "vue";

const name = ref("Jason")
</script>
