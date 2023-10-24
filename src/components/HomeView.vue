<template>
  <li @click="ColorPicker">ColorPicker</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const ColorPicker = () => {
      router.push("/ColorPicker");
    };

    return {
      ColorPicker,
    };
  },
});
</script>
