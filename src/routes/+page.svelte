<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	import LiquidityChart from '$lib/components/LiquidityChart.svelte';
  
	let tabSet: number = 0;
  
	let xrdAmount = writable<number>(0);
	let discount = writable<number>(0);
  
	let selectedLSU = writable<string>('');
	let lsuPercentage = writable<number>(0);
  
	// Dummy LSU tokens for now
	let accountLSUs: string[] = ['LSU1', 'LSU2', 'LSU3'];
  
	// Generate fake data
	const generateFakeData = () => {
	  const data = [];
	  const labels = [];
	  for (let i = 0; i <= 100; i++) {
		const percentage = (i * 0.05).toFixed(2);
		labels.push(`${percentage}%`);
		data.push(Math.floor(Math.random() * 1000));
	  }
	  return { labels, data };
	};
  
	const { labels, data } = generateFakeData();
  
	const chartData = {
	  labels,
	  datasets: [
		{
		  label: 'XRD Liquidity',
		  backgroundColor: 'rgba(54, 162, 235, 0.2)',
		  borderColor: 'rgba(54, 162, 235, 1)',
		  data,
		},
	  ],
	};
  
	const chartOptions = {
	  responsive: true,
	  maintainAspectRatio: false,
	  scales: {
		x: {
		  beginAtZero: true,
		},
		y: {
		  beginAtZero: true,
		},
	  },
	};
  </script>
  
  <style>
	.content-container {
	  max-width: 1200px; /* Double the width */
	  margin: auto;
	  padding: 2rem;
	  border: 1px solid #ddd;
	  border-radius: 8px;
	  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
	.slider {
	  width: 100%;
	}
	.spacer {
	  padding-top: 2rem; /* Adjust the padding as needed */
	}
	.chart-container {
	  width: calc(100% - 4rem); /* Adjusted width with padding */
	  height: 800px; /* Increased height */
	  margin: 2rem auto 0 auto; /* Added margin to move it closer */
	  padding: 1rem; /* Added padding */
	}
  </style>
  
  <div class="spacer"></div>
  
  <div class="grid grid-cols-3 grid-rows-2 min-h-screen">
	<!-- Empty cells to create 2 rows and 3 columns layout -->
	<div></div>
  
	<!-- Centered Tab Group and Content in the middle column of the top row -->
	<div class="flex flex-col items-center justify-center space-y-5 col-span-1 row-span-1">
	  <TabGroup bind:value={tabSet}>
		<Tab bind:group={tabSet} name="tab1" value={0}>
		  <span>Limit Buy</span>
		</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>
		  <span>Market Sell</span>
		</Tab>
	  </TabGroup>
  
	  <div class="content-container">
		{#if tabSet === 0}
		  <div class="space-y-5">
			<div>
			  <label for="xrd-amount">XRD Amount</label>
			  <input type="range" id="xrd-amount" min="0" max="10000" bind:value={$xrdAmount} class="slider" />
			  <span>{$xrdAmount} XRD</span>
			</div>
  
			<div>
			  <label for="discount">Discount Percentage</label>
			  <input type="range" id="discount" min="0" max="5" step="0.05" bind:value={$discount} class="slider" />
			  <span>{$discount} %</span>
			</div>
		  </div>
		{:else if tabSet === 1}
		  <div class="space-y-5">
			<div>
			  <label for="lsu-token">LSU Token</label>
			  <select id="lsu-token" bind:value={$selectedLSU} class="w-full">
				{#each accountLSUs as lsu}
				  <option value={lsu}>{lsu}</option>
				{/each}
			  </select>
			</div>
  
			<div>
			  <label for="lsu-percentage">LSU Percentage</label>
			  <input type="range" id="lsu-percentage" min="0" max="100" bind:value={$lsuPercentage} class="slider" />
			  <span>{$lsuPercentage} %</span>
			</div>
		  </div>
		{/if}
	  </div>
	</div>
	<div></div>
  
	<!-- Bottom row spanning the entire width of the screen -->
	<div class="col-span-3 row-span-1 chart-container">
	  <div class="content-container" style="max-width: 100%; padding: 0; border: none; box-shadow: none;">
		<!-- Placeholder for the liquidity bar chart -->
		<h2>Liquidity Bar Chart</h2>
		<LiquidityChart {data} options={chartOptions} />
	  </div>
	</div>
  </div>
  
  
  
  
  
  
  







