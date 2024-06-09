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
  
	const chartOptions = {
	  responsive: true,
	  maintainAspectRatio: false,
	  scales: {
		x: {
		  beginAtZero: true,
		  title: {
			display: true,
			text: 'Discount Percentage',
			color: 'white',
		  },
		  ticks: {
			color: 'white',
			callback: function (value: number, index: number) {
			  // Display only every fifth label
			  return index % 5 === 0 ? `${(value * 0.05).toFixed(2)}%` : '';
			}
		  }
		},
		y: {
		  beginAtZero: true,
		  title: {
			display: true,
			text: 'XRD',
			color: 'white',
		  },
		  ticks: {
			color: 'white'
		  }
		}
	  },
	  plugins: {
		legend: {
		  labels: {
			color: 'white'
		  }
		},
		tooltip: {
		  titleColor: 'white',
		  bodyColor: 'white',
		  footerColor: 'white'
		}
	  }
	};
  </script>
  
  <div class="pt-4"></div>
  
  <!-- Centered Tab Group and Content -->
  <div class="flex flex-col items-center justify-center space-y-3 w-full max-w-4xl mx-auto px-4">
	<TabGroup bind:value={tabSet}>
	  <Tab bind:group={tabSet} name="tab1" value={0}>
		<span>Limit Buy</span>
	  </Tab>
	  <Tab bind:group={tabSet} name="tab2" value={1}>
		<span>Market Sell</span>
	  </Tab>
	</TabGroup>
  
	<div class="w-full p-5 border-2 border-gray-300 rounded-lg shadow-md">
	  {#if tabSet === 0}
		<div class="space-y-3">
		  <div>
			<label for="xrd-amount">XRD Amount</label>
			<input type="range" id="xrd-amount" min="0" max="10000" bind:value={$xrdAmount} class="w-full" />
			<span>{$xrdAmount} XRD</span>
		  </div>
  
		  <div>
			<label for="discount">Discount Percentage</label>
			<input type="range" id="discount" min="0" max="5" step="0.05" bind:value={$discount} class="w-full" />
			<span>{$discount} %</span>
		  </div>
		</div>
	  {:else if tabSet === 1}
		<div class="space-y-3">
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
			<input type="range" id="lsu-percentage" min="0" max="100" bind:value={$lsuPercentage} class="w-full" />
			<span>{$lsuPercentage} %</span>
		  </div>
		</div>
	  {/if}
	</div>
  
	<!-- Liquidity Chart -->
	<div class="w-full max-w-full mx-auto mt-5 px-4">
	  <div class="border border-gray-300 rounded-lg shadow-md p-4 w-full">
		<LiquidityChart options={chartOptions} />
	  </div>
	</div>
  </div>
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  







