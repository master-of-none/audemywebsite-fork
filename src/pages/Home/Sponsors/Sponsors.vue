<script setup>
import SponsorsCarousel from "./SponsorsCarousel/SponsorsCarousel.vue";
</script>

<template>
    <div class="w-full mb-64 mobile:mb-24 flex flex-col gap-y-10 items-center">
        <h1
            class="text-small font-poppins text-xs text-center font-bold tracking-[6px]"
        >
            SPONSORS THAT TRUSTED US, AMONG OTHERS:
        </h1>
        <div class="sponsors-carousel w-full">
            <div
                class="w-full scroll-auto grid grid-cols-7 grid-row-a items-center justify-center"
            >
                <img
                    src="/assets/images/sponsors/google.png"
                    alt="google logo"
                />
                <img
                    src="/assets/images/sponsors/desmos.png"
                    alt="desmos logo"
                />
                <img src="/assets/images/sponsors/aops.svg" alt="aops logo" />
                <img
                    src="/assets/images/sponsors/wolframalpha.svg"
                    alt="wolframalpha logo"
                />
                <img
                    src="/assets/images/sponsors/intel.svg"
                    alt="intel logo"
                />
                <img
                    src="/assets/images/sponsors/hersheys.svg"
                    alt="hersheys logo"
                />
                <img
                    src="/assets/images/sponsors/k4c.svg"
                    alt="k4c logo"
                />
            </div>
        </div>
        <div class="sponsors-carousel-small w-full">
            <SponsorsCarousel />
        </div>
    </div>
</template>

<style>
@media screen and (min-width: 451px) {
    .sponsors-carousel {
        display: block;
    }
    .sponsors-carousel-small {
        display: none;
    }
}

@media screen and (max-width: 451px) {
    .sponsors-carousel-small {
        display: block;
    }
    .sponsors-carousel {
        display: none;
    }
}
</style>
