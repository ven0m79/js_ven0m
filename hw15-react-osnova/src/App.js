import './App.css';

const ANAKIN_IMAGE = "https://static.wikia.nocookie.net/star-wars-canon/images/7/7e/Anakinskywalker_rots_promo.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const post = {
  name: "Anakin skywalker",
  photo: { ANAKIN_IMAGE },
  nickname: "@dart_vader",
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: { RAY_IMAGE },
  date: "26 февр."
}

function App() {
  return (
    <div className="App">
      <img src={ANAKIN_IMAGE} alt="Anakin" width = "100px"></img><p>{post.nickname}, {post.name}</p><br /><img src={RAY_IMAGE} alt="Ray" width = "600px"></img>
      
    </div>
  );
}

export default App;
