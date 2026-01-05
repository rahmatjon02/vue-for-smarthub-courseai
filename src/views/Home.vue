<script setup>
import AnimatedParticles from "../components/AnimatedParticles.vue";
import GlassMorphism from "../components/GlassMorphism.vue";
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Features from "../components/Features.vue";
import Process from "../components/Process.vue";
import CoursePreview from "../components/CoursePreview.vue";
import Testimonials from "../components/Testimonials.vue";
import Pricing from "../components/Pricing.vue";
import FAQ from "../components/FAQ.vue";
import CTA from "../components/CTA.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative"
  >
    <animated-particles />
    <glass-morphism />
    <Header />
    <hero />
    <features />
    <process />
    <course-preview />
    <testimonials />
    <pricing />
    <c-t-a />
    <f-a-q />
    <Footer />
  </div>
</template>