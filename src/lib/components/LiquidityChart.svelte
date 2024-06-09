<script lang="ts">
    import { Line } from 'svelte-chartjs';
    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables);
  
    export let data: any;
    export let options: any;
  </script>
  
  <div style="width: 100%; height: 100%;">
    <Line {data} {options} />
  </div>
  

