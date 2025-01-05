<template>
  <nav
    class="bg-gradient-to-r from-[#A66E13] via-[#F7BE62] to-[#A56D12] max-w-[256px] m-6 rounded-xl p-[1px] overflow-hidden">
    <div
      class="text-white flex flex-col items-center justify-center gap-16 bg-black rounded-xl h-full py-6">
      <div class="flex flex-col gap-6 items-center">
        <img
          src="assets/images/profile.png"
          alt="profile" />
        <h1 class="text-2xl font-semibold">Simon Husser</h1>
      </div>
      <ul class="flex flex-col gap-4 w-full items-center">
        <li
          class="bg-gradient-to-r from-[#A66E13] via-[#F7BE62] to-[#A56D12] w-full text-center text-black text-2xl py-2 font-semibold">
          <RouterLink to="/">Singleplayer</RouterLink>
        </li>
        <li
          class="bg-gradient-to-r from-[#A66E13] via-[#F7BE62] to-[#A56D12] w-full text-center text-black text-2xl py-2 font-semibold">
          <RouterLink to="/about">Multiplayer</RouterLink>
        </li>
        <li
          class="bg-gradient-to-r from-[#A66E13] via-[#F7BE62] to-[#A56D12] w-full text-center text-black text-2xl py-2 font-semibold">
          <RouterLink to="/projects">Change Theme</RouterLink>
        </li>
        <li
          class="bg-gradient-to-r from-[#A66E13] via-[#F7BE62] to-[#A56D12] w-full text-center text-black text-2xl py-2 font-semibold">
          <RouterLink to="/contact">Guide</RouterLink>
        </li>
      </ul>
      <button
        class="text-white py-2 px-3 border-solid border-2 border-[#A56D12] rounded-lg text-xl font-semibold">
        Disconnect
      </button>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  // .navbar {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 1rem 2rem;
  //   // background-image: $bg-angular-gradient;

  //   color: white;
  // }

  // .profile {
  //   display: flex;
  //   align-items: center;
  // }

  // .profile img {
  //   width: 50px;
  //   height: 50px;
  //   border-radius: 50%;
  //   margin-right: 1rem;
  // }

  // .nav-links {
  //   display: flex;
  //   justify-content: space-between;
  //   list-style: none;
  // }

  // .nav-links li {
  //   margin-right: 1rem;
  // }

  // .btn {
  //   padding: 0.5rem 1rem;
  //   background-color: #333;
  //   color: white;
  //   border: none;
  //   border-radius: 5px;
  //   cursor: pointer;
  // }

  // .btn:hover {
  //   background-color: #555;
  // }
</style>
