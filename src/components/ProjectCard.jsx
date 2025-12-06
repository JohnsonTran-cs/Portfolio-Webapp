export default function ProjectCard({ title, youtubeId, description }) {
  return (
    <div className="project-card">
      
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
