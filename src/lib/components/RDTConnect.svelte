<script>
    import { onMount } from "svelte";
    import { wallet, rdt } from "$lib/stores/wallet";
    import {
      DataRequestBuilder,
      RadixDappToolkit,
      RadixNetwork,
    } from "@radixdlt/radix-dapp-toolkit";
    import { ownedIceIDsStore } from "$lib/stores/ownedIceStore";
  
    let rdtInstance;
  
    onMount(() => {
      ownedIceIDsStore.set([]);
      rdtInstance = RadixDappToolkit({
        dAppDefinitionAddress:
          "account_rdx12xmaa48v04r3thshr3nqw35d7028e3046kffm843vwdvwgzt2n5pdw",
        networkId: RadixNetwork.Mainnet,
        applicationName: "Ice Dapp",
        applicationVersion: "1.0.0",
      });
      rdtInstance.walletApi.setRequestData(
        DataRequestBuilder.persona(),
        DataRequestBuilder.accounts().exactly(1)
      );
      rdtInstance.buttonApi.setTheme("white-with-outline");
      rdt.set(rdtInstance);
    });
  </script>
  <!-- handle zindex! -->
  <div class="z-[999] fixed right-0 m-4 mt-6">
  <radix-connect-button />
  </div>