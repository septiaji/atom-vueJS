<template>
<div id="home">
    <div class="container">
          <div class="row row-cols-2">
            <div class="col" v-for="(data, index) in movies" :key="index">
                <div class="image-area">
                    <img :src="data.image" class="image">
                </div>
                <div class="content-area">
                    <h4>Covid-19</h4>
                    <span class="badge badge-pill badge-success margin-pill">{{ data.duration }}</span>
                    <p class="font-text">{{ data.desc }}</p>
                </div>
                <div class="button-area">

                    <button class="btn btn-info" >Button</button>
                </div>

                              
            </div>
          <div>
          </div>
          </div>
        <div class="container">
        <div class="row row-cols-12">
        <div class="col" >
        <!-- Typography -->     
        <th></th>  
        <div class="container">
                <h4>Button Outline Color</h4>
                <button class="btn btn-outline-primary">Primary</button>
                <button class="btn btn-outline-secondary">Secondary</button>
                <button class="btn btn-outline-success">Success</button>
                <button class="btn btn-outline-danger">Danger</button>
                <button class="btn btn-outline-warning">Warning</button>
                <button class="btn btn-outline-info">Info</button>
                <button class="btn btn-outline-light">Light</button>
                <button class="btn btn-outline-dark">Dark</button>
                
                <br><br>

                <div class="card" style="width: 18rem;">
                <img src="../assets/covid.jpg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text" style="color:black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>

                <br>

                <div class="card text-center">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text" style="color:black">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
                </div>

                <br>

                <div class="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
                <div class="alert alert-secondary" role="alert">
                    A simple secondary alert—check it out!
                </div>
                <div class="alert alert-success" role="alert">
                    A simple success alert—check it out!
                </div>
                <div class="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                </div>
                <div class="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                </div>
                <div class="alert alert-info" role="alert">
                    A simple info alert—check it out!
                </div>
                <div class="alert alert-light" role="alert">
                    A simple light alert—check it out!
                </div>
                <div class="alert alert-dark" role="alert">
                    A simple dark alert—check it out!
                </div>

            </div>                              
                <div class="mb-3 mt-5">
                        <h4>Button color</h4>
                    </div>
                <div class="button-area">

                    <button class="btn btn-info" >Info</button>
                    <button class="btn btn-primary">Primary</button>
                    <button class="btn btn-success" type="success">Success</button>
                    <button class="btn btn-warning" type="warning">Warning</button>
                    <button class="btn btn-danger" type="danger">Danger</button>

                </div> 
        <h2 class="mt-3 mb-5">

            <span>  Typography</span>
        </h2>
        <h3 class="h4 text-success font-weight-bold">Headings</h3>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 1</small>
            </div>
            <div class="col-sm-9">
                <h1 class="mb-0">Lorem ipsum dolor sit amet</h1>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 2</small>
            </div>
            <div class="col-sm-9">
                <h2 class="mb-0">Lorem ipsum dolor sit amet</h2>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 3</small>
            </div>
            <div class="col-sm-9">
                <h3 class="mb-0">Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 4</small>
            </div>
            <div class="col-sm-9">
                <h4 class="mb-0">Lorem ipsum dolor sit amet</h4>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 5</small>
            </div>
            <div class="col-sm-9">
                <h5 class="mb-0">Lorem ipsum dolor sit amet</h5>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 6</small>
            </div>
            <div class="col-sm-9">
                <h6 class="mb-0">Lorem ipsum dolor sit amet</h6>
            </div>
        </div>
        <!-- Specialized titles -->
        <h3 class="h4 text-success font-weight-bold mt-md">Specialized titles</h3>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Heading</small>
            </div>
            <div class="col-sm-9">
                <h3 class="heading mb-0">Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Heading title</small>
            </div>
            <div class="col-sm-9">
                <h3 class="heading-title text-warning mb-0">Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Heading seaction</small>
            </div>
            <div class="col-sm-9">
                <div>
                    <h2 class="display-3">Header with small subtitle </h2>
                    <p class="lead text-muted">According to the National Oceanic and Atmospheric Administration,
                        Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
                </div>
            </div>
        </div>
        <!-- Paragraphs -->
        <h3 class="h4 text-success font-weight-bold mt-md">Paragraphs</h3>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Paragraph</small>
            </div>
            <div class="col-sm-9">
                <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to
                    push possibilities, to show people, this is the level that things could be at.</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Lead text</small>
            </div>
            <div class="col-sm-9">
                <p class="lead">I will be the leader of a company that ends up being worth billions of dollars,
                    because I got the answers. I understand culture. I am the nucleus. I think that’s a
                    responsibility that I have, to push possibilities, to show people, this is the level that things
                    could be at.</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Quote</small>
            </div>
            <div class="col-sm-9">
                <blockquote class="blockquote">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                        ante.</p>
                    <footer class="blockquote-footer">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Muted text</small>
            </div>
            <div class="col-sm-9">
                <p class="text-muted mb-0">I will be the leader of a company that ends up being worth billions of
                    dollars, because I got the answers...</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Primary text</small>
            </div>
            <div class="col-sm-9">
                <p class="text-primary">I will be the leader of a company that ends up being worth billions of
                    dollars, because I got the answers...</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Info text</small>
            </div>
            <div class="col-sm-9">
                <p class="text-info mb-0">I will be the leader of a company that ends up being worth billions of
                    dollars, because I got the answers...</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Success text</small>
            </div>
            <div class="col-sm-9">
                <p class="text-success mb-0">I will be the leader of a company that ends up being worth billions of
                    dollars, because I got the answers...</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Warning text</small>
            </div>
            <div class="col-sm-9">
                <p class="text-warning mb-0">I will be the leader of a company that ends up being worth billions of
                    dollars, because I got the answers...</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Danger text</small>
            </div>
            <div class="col-sm-9">
                <p class="text-danger mb-0">I will be the leader of a company that ends up being worth billions of
                    dollars, because I got the answers...</p>
            </div>
        </div>
        </div>
        </div>
        
    </div>
    
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Home',
      movies: [
        {
          title: 'Covid-19',
          image: require('../assets/covid.jpg'),
          duration: 'covid',
          director: 'Khofifah', 
          release: 2020,
          desc: 'Persebaran kasus covid19 di Jawa Timur.',
          id: 1
        },
        {
          title: 'Covid-19',
          image: require('../assets/covid.jpg'),
          duration: 'covid',
          director: 'Khofifah',
          release: 2020,
          desc: 'Persebaran kasus covid19 di Jawa Timur.',
          id: 2
        }
      ]
    }
  }
  
  
}

</script>

<style>
.container
{
    margin-top: 2%;
}
.font-text
{
    font-size: 17px;
    margin: 10px 0;
}
.image-area
{
    width: 200px;
    height: 300px;
    text-align: center;
}
.image{
    width: 500px;
    height: 300px;
}
.content-area
{
    margin: 10px 0;
    height: 30%;
}
</style>
