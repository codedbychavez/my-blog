<template>
  <div class="about">
    <h2 class="title">
      About me
    </h2>
    <div class="about-text-container">
      <p class="paragraph">
        I was 22 when I first learned about web development from a colleague of mine while I was working as an ICT technician. As a newbie, I took advantage of the internet's power. As I googled, I became overwhelmed. Stepping back, I started simple (HTML, CSS), then dabbled in JS. After a few years of daily practice, I became comfortable with it. As a result, I am here, always striving to improve.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.about {

  @apply px-8 py-12 text-gray-600;
  
  
  .title {
    @apply text-5xl uppercase;
    font-family: 'Archivo Black', sans-serif;

  }

  .about-text-container {
    max-width: 70char;

    .paragraph {
      @apply text-xl text-slate-500;
    }
  }
}
</style>