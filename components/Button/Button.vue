<template>
  <button
    :class="[
      'px-4 py-2 rounded-md transition-all duration-300 ease-in-out',
      variantClasses,
      sizeClasses,
      {
        'opacity-50 cursor-not-allowed': disabled,
        'hover:opacity-80': !disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>Botão</slot>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
  }>();

  const emit = defineEmits<{
    click: [Event];
  }>();

  const variantClasses = computed(() => {
    switch (props.variant) {
      case 'primary':
        return 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-300';
      case 'secondary':
        return 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 focus:ring-2 focus:ring-secondary-300';
      case 'danger':
        return 'bg-danger-500 text-white hover:bg-danger-600 focus:ring-2 focus:ring-danger-300';
      default:
        return 'bg-primary-500 text-white';
    }
  });

  const sizeClasses = computed(() => {
    switch (props.size) {
      case 'small':
        return 'text-sm px-2 py-1';
      case 'medium':
        return 'text-base px-4 py-2';
      case 'large':
        return 'text-lg px-6 py-3';
      default:
        return 'text-base px-4 py-2';
    }
  });

  const handleClick = (event: Event) => {
    if (!props.disabled) {
      emit('click', event);
    }
  };
</script>
