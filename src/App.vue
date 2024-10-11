<script setup>
import { TreeMapComponent as EjsTreemap,TreeMapLegend,TreeMapTooltip ,TreeMapHighlight,TreeMapSelection} from "@syncfusion/ej2-vue-treemap";
import { provide } from 'vue';

provide('treemap', [TreeMapLegend, TreeMapTooltip,TreeMapHighlight,TreeMapSelection]);
const dataSource = [
    { country: "United States", jobDescription: "Sales Department", jobGroup: "Executive", employeeCount: 20 },
    { country: "United States", jobDescription: "Sales", jobGroup: "Analyst",employeeCount: 30 },
    { country: "United States", jobDescription: "Marketing Department", employeeCount: 40 },
    { country: "United States", jobDescription: "Management", employeeCount: 80 },
    { country: "India", jobDescription: "Technical", jobGroup: "Testers", employeeCount: 100 },
    { country: "India", jobDescription: "HR Executives", employeeCount: 30 },
    { country: "India", jobDescription: "Accounts", employeeCount: 40 },
    { country: "UK", jobDescription: "Technical", jobGroup: "Testers", employeeCount: 30 },
    { country: "UK", jobDescription: "HR Executives", employeeCount: 50 },
    { country: "UK", jobDescription: "Accounts", employeeCount: 60 }    
]

const leafItemSettings = {
  labelPath: "country",
  fill: '#37afab',
  labelStyle: {
      size: '15px'
    },
    border: { color:'white', width: 0.5 },
    labelFormat: '${country}-(${jobDescription}-${employeeCount})',
    interSectAction: 'Trim',
    labelPosition: 'TopCenter',
    gap: 7
    }
    const levels = [
    {  groupPath: 'country',
      border: { color: 'white', width: 0.5},
      fill: '#87cfcc',
    groupGap: 7,
    headerStyle: { size: '15px'},
      headerHeight: 40, 
    headerAlignment: 'Center' },
    { groupPath: 'jobDescription',
      border: { color: 'white', width: 0.5},
      fill: '#50b2ae',
      groupGap: 7,
      headerStyle: { size: '15px'},
      headerHeight: 40,
      headerAlignment: 'Center' }
];
const tooltipSettings = {
    visible: true
};
const highlightSettings = {
    enable: true,
    fill: '#0ec2bc',
    border: { color: 'black', width: 0.9 },
    mode: 'Child'    
};
const selectionSettings = {
    enable: true,
    fill: '#2f7573',
    border: { color: 'white', width: 0.5 },
     mode: 'Parent'
};
</script>

<template>
  
 <ejs-treemap 
  :dataSource="dataSource" weightValuePath="employeeCount"  
  :leafItemSettings="leafItemSettings"
  :tooltipSettings='tooltipSettings'
  :highlightSettings='highlightSettings'
  :selectionSettings='selectionSettings'
  renderDirection="TopRightBottomLeft"
  :levels="levels"
  ></ejs-treemap>

</template>

<style>

</style>
