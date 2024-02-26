const ProjectDetails = ({ details }) => {
  // if (!details || !details.projectInfo) {
  //   return null; // or a message indicating that there are no project details
  // }
  return (
    <>
      <div className="col-12 mb-2">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          {details.date_title}
        </div>
        <div className="pt-text">{details.date}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        {details.project_details.map((project, index) => (
          <div key={index}>
            <div className="pt-title fw-bold tx-dark text-uppercase">
              {project.title}
            </div>
            <div className="pt-text mb-2">{project.text}</div>
          </div>
        ))}
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default ProjectDetails;
