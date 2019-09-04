<template>
  <v-container class="app-view-content" fluid style="width: 80%">
    <v-row>
      <v-card toolbar-height="56" style="width: 100%" class="pa-3">
        <v-card-title>Alerts - Base</v-card-title>
        <v-card-text>
          <v-alert
            v-for="(t, index) in types"
            :type="t"
            :key="index">
            This is a {{ t }} alert.
          </v-alert>
        </v-card-text>
      </v-card>
    </v-row>

    <v-row class="mt-4">
      <v-card toolbar-height="56" style="width: 100%" class="pa-3">
        <v-card-title>Alerts - Outline</v-card-title>
        <v-card-text>
          <v-alert
            v-for="(t, index) in types"
            :type="t"
            outlined
            :key="index">
            This is a {{ t }} alert.
          </v-alert>
        </v-card-text>
      </v-card>
    </v-row>

    <v-row class="mt-4">
      <v-col col="6">
        <h3> Alerts - Custom</h3>
        <v-alert
          :value="true"
          color="cyan"
          icon="mdi-check">
          This is a success alert with custom color and icon.
        </v-alert>
      </v-col>
      <v-col col="6">
        <h3> Alerts - Closable </h3>
        <v-alert
          v-model="display"
          dismissible
          type="success">
          This is a success alert that is closable.
        </v-alert>
        <div class="text-xs-center">
          <v-btn
            v-if="!display"
            color="primary"
            dark
            @click="display = true">
            Reset
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row >
      <v-col>
        <h3> Alerts - Display transition </h3>
        <div class="text-center" >
          <v-btn color="primary" @click="alert = !alert" class="ma-3"> Toggle</v-btn>
          <v-alert
            :value="alert"
            type="success"
            transition="scale-transition">
            This is a success alert.
          </v-alert>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'VAlerts',
    data() {
      return {
        display: true,
        alert: false,
        types: ['info', 'warning', 'success', 'error']
      }
    }
  }
</script>
