<script lang="ts">
    import { writable } from 'svelte/store';
  
    let xrdAmount = writable<number>(0);
    let discount = writable<number>(0);
  </script>
  
  <div class="card p-4 w-full max-w-lg">
    <h2 class="text-center mb-4">Limit Buy</h2>
    <div class="space-y-3">
      <div>
        <label for="xrd-amount">XRD Amount</label>
        <input type="range" id="xrd-amount" min="0" max="10000" bind:value={$xrdAmount} class="w-full" />
        <span class="chip variant-filled">{$xrdAmount} XRD</span>
      </div>
      <div>
        <label for="discount">Discount Percentage</label>
        <input type="range" id="discount" min="0" max="5" step="0.05" bind:value={$discount} class="w-full" />
        <span class="chip variant-filled">{$discount} %</span>
      </div>
      <div class="flex justify-center">
        <button type="button" class="btn-xl variant-filled-tertiary w-1/2 rounded-full">Place Buy Order</button>
      </div>
    </div>
  </div>
  