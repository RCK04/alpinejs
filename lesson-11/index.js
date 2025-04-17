document.addEventListener("alpine:init", () => {
  Alpine.data("demo", () => ({
    posts: [],
    bg: '',

    init() {
      console.log("init");

      // fetch data
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((res) => res.json())
        .then((data) => {
          this.posts = data;
        })
        .catch((err) => console.log(err));

      // $watch - watch data for changes
      this.$watch('bg', (newBg, oldBg) => {
        document.body.style.backgroundColor = newBg;
      })
    },
  }));
});
