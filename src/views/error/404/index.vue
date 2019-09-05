<template>
  <v-app>
    <v-content>
      <v-container fill-height >
        <div class="text-align">
          <div class="display-2">
            Whoops, 404
          </div>
          <p  class="pt-6 pb-6">The page you were looking for does not exist</p>
          <v-btn round dark color="primary" :to="to" > Back to home </v-btn>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        default: '/',
      },
    },
  };
</script>
