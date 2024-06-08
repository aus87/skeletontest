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
	main {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  gap: 5rem;
	  padding: 5rem 1rem;
	}

	.connect-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    --radix-connect-button-width: 11.25rem;
    --radix-connect-button-height: 2.875rem;
    --radix-connect-button-border-radius: 0.5rem;
  }
  @media (max-width: 384px) {
    .connect-btn {
      --radix-connect-button-width: 100px;
    }
  }
  </style>
