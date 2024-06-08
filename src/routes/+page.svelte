<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';

	let tabSet: number = 0;

	let xrdAmount = writable<number>(0);
	let discount = writable<number>(0);

	let selectedLSU = writable<string>('');
	let lsuPercentage = writable<number>(0);

	// Dummy LSU tokens for now
	let accountLSUs: string[] = ['LSU1', 'LSU2', 'LSU3'];
</script>

<style>
	.content-container {
		max-width: 600px;
		margin: auto;
		padding: 2rem;
		border: 1px solid #ddd;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
	.slider {
		width: 100%;
	}
</style>

<div class="grid grid-cols-3 grid-rows-3 min-h-screen">
	<!-- Empty cells to create 3x3 grid layout -->
	<div></div>
	<div></div>
	<div></div>
	<div></div>

	<!-- Centered Tab Group and Content -->
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

	<!-- Empty cells to create 3x3 grid layout -->
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>



