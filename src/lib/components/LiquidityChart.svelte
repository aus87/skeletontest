<script lang="ts">
    import { onMount } from 'svelte';
    import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip } from 'chart.js';
  
    let canvas: HTMLCanvasElement;
    let chart: Chart;
  
    export let data;
    export let options;
  
    onMount(() => {
      Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip);
  
      const config = {
        type: 'bar',
        data,
        options
      };
  
      if (canvas) {
        chart = new Chart(canvas, config);
      }
  
      return () => {
        if (chart) chart.destroy();
      };
    });
  </script>
  
  <canvas bind:this={canvas} style="width: 100%; height: 600px;"></canvas>
  