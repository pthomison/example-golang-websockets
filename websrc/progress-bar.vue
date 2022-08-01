<script>
export default {
  props: ['percentage'],
}

</script>

<template>

	<div class="progress">
		<div id="progress-bar" class="progress-bar" role="progressbar" :style="{ width: percentage + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
	</div>

</template>