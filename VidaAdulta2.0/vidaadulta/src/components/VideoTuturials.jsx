// APLICACAO DE VIDEOS 

function VideoTutorials() {
    const videos = [
      { title: 'Como abrir uma conta bancária', url: 'https://youtube.com/...' },
      { title: 'Direitos trabalhistas básicos', url: 'https://www.youtube.com/watch?v=LI0YcHMu9P4' }
    ];
  
    return (
      <div>
        <h2>Tutoriais em Vídeo</h2>
        <ul>
          {videos.map((video, index) => (
            <li key={index}>
              <a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default VideoTutorials;