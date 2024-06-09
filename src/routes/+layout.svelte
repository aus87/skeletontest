<script lang="ts">
	import '../app.postcss';
	// import RunsOnRadixLogo from "$lib/images/runonradixlogo.png";
	// import RdtConnect from "$lib/components/RDTConnect.svelte";
	import { GatewayApiClient } from "@radixdlt/babylon-gateway-api-sdk";
	import {
		DataRequestBuilder,
		RadixDappToolkit,
		RadixNetwork,
	} from "@radixdlt/radix-dapp-toolkit";
	import { onMount } from "svelte";
	import { gatewayApi, rdt, walletData } from "$lib/stores";
	import { dAppDefinitionAddress } from "$lib/constants";
	import { AppBar } from '@skeletonlabs/skeleton';
	import Button from "$lib/components/Button.svelte";

	onMount(() => {
		// Initialize the Gateway API for network queries and the Radix Dapp Toolkit for connect button and wallet usage.
		const dappConfig = {
		// networkId is 2 for Stokenet, 1 for Mainnet
		networkId: RadixNetwork.Stokenet,
		applicationVersion: "1.0.0",
		applicationName: "Hello Token dApp",
		applicationDappDefinitionAddress: dAppDefinitionAddress,
		};

		// Instantiate Radix Dapp Toolkit
		$rdt = RadixDappToolkit(dappConfig);
		console.log("dApp Toolkit: ", $rdt);

		// Instantiate Gateway API
		$gatewayApi = GatewayApiClient.initialize(dappConfig);
		console.log("gatewayApi: ", $gatewayApi);
		// Fetch the user's account address(es) from the wallet
		$rdt?.walletApi.setRequestData(DataRequestBuilder.accounts().atLeast(1));

		// Subscribe to updates to the user's shared wallet data and store it in the walletData store
		$rdt?.walletApi.walletData$.subscribe((data) => {
		$walletData = data;
		});
	});
</script>

<!-- <Nav /> -->
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		(icon)
	</svelte:fragment>
	Liquify
	<svelte:fragment slot="trail">

		<radix-connect-button />
	</svelte:fragment>
</AppBar>

<main>
	<slot />
  </main>
  	


  
  <style>
	/*  */
  </style>
