import Post from './components/Post';

function App() {
  return (
    <div className='flex'>
      <div className='mockup-phone'>
        <div className='camera'></div>
        <div className='display'>
          <div className='artboard artboard-demo phone-3 divide-y'>
            <Post url='https://picsum.photos/400' />
            <Post url='https://picsum.photos/300' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
