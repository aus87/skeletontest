<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import LiquidityChart from '$lib/components/LiquidityChart.svelte';
	import LimitBuy from '$lib/components/LimitBuy.svelte';
	import MarketSell from '$lib/components/MarketSell.svelte';
  
	let tabSet: number = 0;
  
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
  
  <div class="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
  
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
  
	  <div class="flex flex-col items-center justify-center w-full p-5">
		{#if tabSet === 0}
		  <LimitBuy />
		{:else if tabSet === 1}
		  <MarketSell />
		{/if}
	  </div>
  
	  <!-- Liquidity Chart -->
	  <div class="flex flex-col items-center justify-center w-full p-5 mt-5">
		<div class="card p-4 w-full">
		  <LiquidityChart options={chartOptions} />
		</div>
	  </div>
	</div>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  







