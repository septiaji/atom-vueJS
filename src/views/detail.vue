<template>
    <div class="details">
            <div class="container">
              <div class="row detail-mov">
                <div class="col-md-12" v-for="(movie, index) in movies" :key="index">
                  <div v-if="proId == movie.id">
                    <h1>{{ movie.title }}</h1>
                    <img :src="movie.image" class="img-thumbnail">
                    <div class="a">
                      <span class="badge badge-pill badge-success margin-pill">{{ movie.duration }}</span>
                    </div>
                      <p class="content">Released Year : {{movie.release}}</p>
                    <p class="desc">{{movie.desc}}</p>
                  </div>
                </div>
              </div>
              <div class="button-area">
                    <router-link to="/">Go back </router-link>
              </div>
            </div>
            <!-- <h1>id : {{ this.$route.params.Pid }}</h1> -->
    </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      proId: this.$route.params.Pid,
      title: 'Detail',
      movies: [
        {
          title: 'h1',
          image: require('../assets/3.jpg'),
          duration: '113 min',
          director: 'Samehada',
          release: 2019,
          desc: 'Mengisahkan Kelompok Topi Jerami yang diundang untuk hadir pada acara Pirates Expo. Semua bajak laut terhebat datang pada acara itu. Tentu Luffy sangat bersemangat untuk datang. Acara berlangsung meriah. Banyak makanan, permainan, dan pertunjukan. Semua orang tampak bersenang-senang. Namun, tiba-tiba tentara angkatan laut ikut campur dalam acara tersebut. Keadaan juga semakin tidak jelas saat Usopp terluka oleh seseorang. Kini Luffy dan anggota bajak lautnya mulai waspada dan mencari tahu yang sebenarnya terjadi. Keadaan awal yang tadinya aman, bukan tidak mungkin menjadi berantakan dan juga berbahaya.',
          id: 1
        },
        {
          title: 'City Hunter',
          image: require('../assets/3.jpg'),
          duration: '130 min',
          director: 'Anime Indo',
          release: 2019,
          desc: 'Film baru yang ber-setting di Shinjuku pada masa kini. Ryo Saeba, seorang sniper dan private eye (“sweeper“) yang bermarkas di Shinjuku Ward Tokyo dengan keahlian menembak yang tak tertandingi dan obsesi berlebihan untuk lawan jenis. Dia memberi jasa sebagai pengawal dan tugas lain untuk kliennya.',
          id: 2
        }
      ]
    }
  }
}
</script>
<style>
  .detail-mov
  {
    text-align: center
  }
  .a
  {
    margin-top: 10px;
  }
  .desc
  {
    text-align: left;
  }
  p, h1, h2, h3, h4
  {
    color: #f1f3f4;
  }
</style>
