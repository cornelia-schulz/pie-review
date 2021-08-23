import Header from '../components/Header';
import Map from '../components/Map';

function Home () {
  return (
    <div className="">
      <Header />
      <main className="home">
        <article className="shops">pie shops</article>
        <Map />
      </main>
    </div>
  )
}

export default Home