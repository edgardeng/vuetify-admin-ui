<template>
  <v-container class="app-view-content">

    <h3> Avatars - Base </h3>

    <v-row >

        <v-avatar color="indigo" class="ma-2">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>

        <v-avatar class="ma-2">
          <img :src="url" alt="Vasttian">
        </v-avatar>

        <v-badge overlap class="ma-2">
          <span slot="badge">3</span>
          <v-avatar color="blue lighten-1">
            <v-icon dark>mdi-bell</v-icon>
          </v-avatar>
        </v-badge>
        <v-avatar color="teal" class="ma-2">
          <span class="white--text headline">V</span>
        </v-avatar>
    </v-row>

    <v-row>
      <v-col>
        <h3> Avatars - Custom </h3>
        <v-avatar color="blue" class="ma-2">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
        <v-avatar tile color="indigo"  class="ma-2">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
        <v-avatar size="70" color="indigo" class="ma-2">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3> Avatars - Resizable </h3>

        <v-slider
          v-model="slider"
          :min="8"
          :max="256"
          label="Size:"
          thumb-label ></v-slider>
        <v-switch
          v-model="tile"
          label="Tile" ></v-switch>

        <v-avatar
          :tile="tile"
          :size="avatarSize"
          color="grey lighten-4" >
          <img :src=url alt="avatar" >
        </v-avatar>
      </v-col>
    </v-row>

   <h3> Avatars - Popout </h3>

    <v-expansion-panels class="mt-4">
      <v-expansion-panel v-for="(item,i) in items" :key="i" >
        <v-expansion-panel-header>
          <v-avatar size="36px" >
            <img v-if="item.avatar" :src="item.avatar" alt="Avatar" >
            <v-icon v-else :color="item.color" size="42" v-text="item.icon" ></v-icon>
          </v-avatar>
          <strong v-html="item.name"></strong>
        </v-expansion-panel-header>
        <v-expansion-panel-content> {{item.text}}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </v-container>
</template>

<script>
  export default {
    name: 'VAvatars',
    data() {
      return {
        url: 'https://edgardeng.github.io/resource/image/favicon.jpg',
        items: [
          {
            avatar: 'https://edgardeng.github.io/resource/image/favicon.jpg',
            name: 'edgardeng',
            text: `The \`v-avatar\` component is used to control the size and border radius of responsive images,
            typically used to show profile pictures.`,
          },
          {
            icon: 'mdi-account',
            color: 'blue',
            name: 'Face',
            text: `The avatar has a dynamic size that can be scaled for any situation.
            A tile variation is available for displaying an avatar without border radius.`,
          },
        ],
        slider: 128,
        tile: false,
      };
    },
    computed: {
      avatarSize() {
        return `${this.slider}px`;
      },
    },
  };
</script>
