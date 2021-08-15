import StoryblokClient from 'storyblok-js-client';

const token = 'Dqmusoo2H8lBrjjh1CKWRAtt';

let storyapi = new StoryblokClient({
  accessToken: token,
});

export default {
  name: 'blogApi',

  getBlogPosts () {
    window.storyblok.init({
      accessToken: token,
    });
    window.storyblok.on('change', () => {
      this.getStories('published');
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStories('published');
      } else {
        this.getStories('published');
      }
    });

    return this.getStories('published');
  },

  getStories (version) {
    return storyapi
      .get('cdn/stories/', {
        version: version,
        starts_with: 'blog/',
      })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  },
}