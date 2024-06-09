<script lang="ts">
    import { writable } from 'svelte/store';
  
    let selectedLSU = writable<string>('');
    let lsuPercentage = writable<number>(0);
  
    // Dummy LSU tokens for now
    let accountLSUs: string[] = ['LSU1', 'LSU2', 'LSU3'];
  </script>
  
  <div class="card p-4 w-full max-w-lg">
    <h2 class="text-center mb-4">Market Sell</h2>
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
        <span class="chip variant-filled">{$lsuPercentage} %</span>
      </div>
      <button type="button" class="btn-xl variant-filled-tertiary w-full">Place Sell Order</button>
    </div>
  </div>
  