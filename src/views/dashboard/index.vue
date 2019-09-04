<template>
  <div class="app-view-content" style="overflow-x: hidden;">
    <v-row justify="center" align="center" >

      <v-col cols="12">
        <v-row justify="around" align="center" >
          <v-col class="ma-3 pa-6" key="index"
                  v-for="(config, index) in indicatorConfig">
            <separate-indicator :config="config" />
          </v-col>
        </v-row>
      </v-col>


      <v-col cols="12">
        <dynamic-analysis />
      </v-col>


      <v-col cols="12">
        <total-statistics />
      </v-col>


      <v-col cols="12">
        <visitors-location />
      </v-col>

    </v-row>

  </div>
</template>

<script>
  import {
    DynamicAnalysis,
    TotalStatistics,
    VisitorsLocation,
    SeparateIndicator,
  } from './components';

  export default {
    name: 'Dashboard',
    components: {
      DynamicAnalysis,
      TotalStatistics,
      SeparateIndicator,
      VisitorsLocation,
    },
    data() {
      return {
        chartOption: {},
        indicatorConfig: [
          {
            color: 'teal',
            icon: 'mdi-account-group',
            title: 'VISITORS',
            count: 999,
          },
          {
            color: 'light-blue',
            icon: 'mdi-message',
            title: 'MESSAGES',
            count: 999,
          },
          {
            color: 'cyan accent-3',
            icon: 'mdi-share',
            title: 'SHARES',
            count: 999,
          },
          {
            color: 'indigo',
            icon: 'mdi-download',
            title: 'DOWNLOADS',
            count: 999,
          },
        ],
      };
    },
  };
</script>
