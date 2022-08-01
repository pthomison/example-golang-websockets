<script>
export default {
  data() {
    return {
      countstart: 0
    }
  }
}
</script>

<template>

	<form action="javascript:void(0);">
	  <div class="mb-3">

		<label for="countstart" class="form-label">Countdown
			<input type="number" name="countstart" id="countstart" v-model="countstart">
		</label>

	</div>

		<button @click="$emit('startCountdown', countstart)" class="btn btn-primary">Start</button>

	</form>

</template>

