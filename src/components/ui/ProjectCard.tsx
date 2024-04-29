const ProjectCard = ({ project }) => {
  return (
    <div
      className="
      cursor-pointer
      bg-white 
      p-8 
      m-2 
      rounded-lg 
      border 
      border-gray-200 
      shadow-md 
      focus:p-10
      focus:shadow-xl
      transition-all
      "
    >
      <div className="mb-2">
        <h5 className="text-lg font-bold text-gray-900">{project.team}</h5>
        <p className="text-gray-700">{project.title}</p>
      </div>
      <div className="flex -space-x-2 overflow-hidden mt-4">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="/images/avatar.png"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="/images/user_img.png"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="/images/user_2.png"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="/images/user_img.png"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="/images/avatar.png"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="/images/user_2.png"
          alt=""
        />
        <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 text-sm">
          +17
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
