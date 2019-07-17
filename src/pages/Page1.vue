<template>
  <div>
    <h1>Page 1</h1>
    <br>
    count: {{ count }}
    <br>
    <ul>
      <li v-for="film in films">
        Judul film: {{film.title}}
        <br>
        Sinopsis film: {{film.description}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      films: []
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  mounted() {
    const URL_API = "https://ghibliapi.herokuapp.com/films";
    axios.get(URL_API).then(r => (this.films = r.data));

    // fetch(URL_API)
    //   .then(response => response.json())
    //   .then(data => (this.films = data));
  }
};
</script>
