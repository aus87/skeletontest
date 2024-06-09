<script lang="ts">
    import { Bar } from 'svelte-chartjs';
    import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
    import { data } from './liquiditydata.js'; // Import the data from liquiditydata.js
  
    Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
    export let options: any;
  </script>
  
  <Bar {data} {options} style="width: 100%; height: 600px;" />
  
  
  
  