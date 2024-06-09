export default function Projects() {
  return (
    <main className="px-4 md:px-56 lg:px-96 space-y-24 py-24 scroll-smooth">
      <h5 className="text-4xl font-bold">projects </h5>
      <div className="project-item">
        <a href="#" className="project-link">
          galzzy
        </a>
        <span className="project-description">
          <span className="arrow">&#9654;</span>
          <p>making uploads easy for youtubers</p>
        </span>
      </div>
      <div className="project-item">
        <a href="#" className="project-link">
          indyte admin
        </a>
        <span className="project-description">
          <span className="arrow">&#9654;</span>
          <p>client management system for dieticians.</p>
        </span>
      </div>
      <div className="project-item">
        <a href="#" className="project-link">
          bookings crdsi
        </a>
        <span className="project-description">
          <span className="arrow">&#9654;</span>
          <p>equipment booking portal used in iit jodhpur</p>
        </span>
      </div>
      <div className="project-item">
        <a
          target="_blank"
          href="https://github.com/IzaanAnwar/garbage"
          className="project-link"
        >
          garbage
        </a>
        <span className="project-description">
          <span className="arrow">&#9654;</span>
          <p>cli based file delete and recovery</p>
        </span>
      </div>
      <div className="project-item">
        <a
          target="_blank"
          href="https://www.linkedin.com/company/twokey/"
          className="project-link"
        >
          twokey
        </a>
        <span className="project-description">
          <span className="arrow">&#9654;</span>
          <p>helped in building the frontend of the twokey platform</p>
        </span>
      </div>
      <div className="project-item">
        <a
          target="_blank"
          href="https://ani-rec.vercel.app"
          className="project-link"
        >
          ani rec
        </a>
        <span className="project-description">
          <span className="arrow">&#9654;</span>
          <p>mongo db indexes based anime recommendations</p>
        </span>
      </div>
      <p>and some small projects not worth sharing...</p>
    </main>
  );
}
