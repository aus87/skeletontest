

<script>
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

</script>



<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Let's get cracking bones!</h1>
		<p>Start by exploring:</p>
		
		<TabGroup>
			<TabAnchor href="/">
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>(Limit Buy)</span>
			</TabAnchor>
			<TabAnchor href="/about">
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>(Market Sell)</span>
			</TabAnchor>
			<!-- ... -->
		</TabGroup>
		
		<ul>
			<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
			<li><code class="code">/src/app.postcss</code> - app wide css</li>
			<li>
				<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
			</li>
		</ul>
	</div>
</div>
