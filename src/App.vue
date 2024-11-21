<template>
  <div>
    <header
      class="d-flex justify-content-between align-items-center p-3 shadow"
      style="background-color: #e3f2fd"
    >
      <div>
        <img src="https://caodang.fpt.edu.vn/wp-content/uploads/logo-3.png" alt="" />
      </div>

      <div>
        <RouterLink to="/home" class="mx-2 text-decoration-none">Home</RouterLink>
    
      
      </div>
      <div>
        <button type="button" class="btn btn-primary">
          <RouterLink  class="mx-2 text-decoration-none" to="/create" style="color: black; "> Create</RouterLink>
        </button>

      </div>
    </header>
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>