<template>
    <teleport to="#modals">
        <Transition>
            <div class="modal">
                <img src="assets/images/success.jpg" alt="Modal Image" width="200" height="200">
            </div>
        </Transition>
    </teleport>
</template>

<script setup>
onMounted(() => {
    console.log('mounted');
})
</script>

<style scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
