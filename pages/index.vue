<template>
  <div>
    <div class="main-wrap">
      <header-main />
      <div class="container-wrap scroll-nav-content">
        <section id="home">
          <banner />
        </section>
        <section id="feature" class="space-top">
          <feature />
        </section>
        <section id="popular" class="space-top-short">
          <popular-course />
        </section>
        <section id="explore">
          <explore />
        </section>
        <div id="about">
          <about />
        </div>
        <section id="testimonials" class="space-top">
          <testimonials />
        </section>
        <section id="blog" class="space-top-short">
          <blog />
        </section>
        <section id="subscribe" class="space-top-short">
          <subscribe-form />
        </section>
        <footer-main />
      </div>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  .v-theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  padding-bottom: section-margin($spacing1);
  @include breakpoints-down(md) {
    padding-bottom: section-margin(6px);
  }
}
.space-bottom-short {
  padding-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  padding-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    padding-top: section-margin(6px);
  }
  @include breakpoints-down(xs) {
    padding-top: section-margin(3px);
  }
}
.space-top-short {
  padding-top: section-margin($spacing1 * 0.5);
}
.container-wrap {
  > section {
    position: relative;
  }
}
</style>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Feature from '@/components/Feature';
import PopularCourse from '@/components/PopularCourse';
import Explore from '@/components/Explore';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import SubscribeForm from '@/components/SubscribeForm';
import Footer from '@/components/Footer';
import Hidden from '@/components/Hidden';
import PageNav from '@/components/PageNav';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'header-main': Header,
    Banner,
    Feature,
    PopularCourse,
    Explore,
    About,
    Testimonials,
    Blog,
    SubscribeForm,
    'footer-main': Footer,
    PageNav,
    Hidden,
    Notification,
  },
  setup() {
    // push route to the stored cookie languages only for index page
    const router = useRouter();
    const storedLang = useCookie('i18n_redirected');
    const i18nLocale = useI18n();

    const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
    onMounted(() => {
      const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
      if (storedLang.value && rootUrl) {
        router.push({ path: `/${storedLang.value}` });
      }
    });
  },
  head() {
    return {
      title: brand.education.name + ' - Home Page',
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
  },
});
</script>
