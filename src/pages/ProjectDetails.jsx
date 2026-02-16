import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectDetails = () => {
    const { id } = useParams();

    // In a real app, you'd fetch this data based on ID
    const project = {
        id: id,
        title: `Project ${id}`,
        description: "Detailed description of the project goes here. This would include the problem solved, technologies used, and the outcome.",
        fullDescription: `
      This project was built to address specific challenges in the industry. 
      We utilized a modern tech stack to ensure scalability and performance.
      The key features include real-time updates, secure authentication, and a responsive design.
    `,
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
        images: [
            "https://via.placeholder.com/800x400?text=Project+Screenshot+1",
            "https://via.placeholder.com/800x400?text=Project+Screenshot+2"
        ],
        demoLink: "#",
        repoLink: "#"
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <img src={project.images[0]} alt={project.title} className="w-full h-auto rounded-lg mb-8" />

                    <div className="prose prose-lg text-gray-700 max-w-none mb-8">
                        <p className="text-xl font-medium mb-4">{project.description}</p>
                        <p className="whitespace-pre-line">{project.fullDescription}</p>
                    </div>

                    <div className="flex gap-4">
                        <a href={project.demoLink} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Live Demo
                        </a>
                        <a href={project.repoLink} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
