const About = () => {
    const skills = [
        "React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "PostgreSQL", "AWS", "Docker"
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
                <div className="prose prose-lg text-gray-600 mb-12">
                    <p className="mb-4">
                        I am a passionate developer with a strong foundation in computer science principles and modern web technologies.
                        My journey began with a curiosity for how things work nicely on the web, which led me to master the entire stack.
                    </p>
                    <p>
                        I focus on writing clean, maintainable code and building intuitive user interfaces.
                        When I'm not coding, I'm exploring new technologies or contributing to open source projects.
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
