import { useState } from 'react';
import mapBackground from '../assets/map-background.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1000);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl w-full">
                    {/* Header Section */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                            Let's Build Something <span className="text-primary">Extraordinary</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities and challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Left Column: Contact Info & Resume */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Direct Contact Card */}
                            <div className="bg-white dark:bg-neutral-surface-dark p-8 rounded-xl shadow-soft border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>

                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    <span className="material-icons text-primary text-2xl">contact_page</span>
                                    Contact Details
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                                                <span className="material-icons text-xl">email</span>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                                            <a href="mailto:hello@alexdev.com" className="text-base font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                                                hello@alexdev.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                                                <span className="material-icons text-xl">location_on</span>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                                            <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                San Francisco, CA (Remote Friendly)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Connect with me</p>
                                    <div className="flex space-x-4">
                                        {['github', 'linkedin', 'twitter'].map((platform) => (
                                            <a key={platform} href="#" className="group relative flex items-center justify-center h-10 w-10 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 text-gray-600 dark:text-gray-400">
                                                {platform === 'github' && (
                                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                                {platform === 'linkedin' && (
                                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                                {platform === 'twitter' && (
                                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                    </svg>
                                                )}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Resume CTA */}
                            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 shadow-lg text-white relative overflow-hidden">
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2">My Resume</h3>
                                    <p className="text-blue-100 mb-6 text-sm">Download my CV to see a detailed overview of my technical skills, experience, and education.</p>
                                    <button className="w-full group bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md">
                                        <span className="material-icons mr-2 text-xl group-hover:scale-110 transition-transform">download</span>
                                        Download CV (PDF)
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white dark:bg-neutral-surface-dark rounded-xl shadow-soft border border-gray-100 dark:border-gray-800 p-8 sm:p-10 h-full">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                                            <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="material-icons text-gray-400 text-lg">person</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className="block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary py-3 transition-colors border"
                                                />
                                            </div>
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                                            <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="material-icons text-gray-400 text-lg">alternate_email</span>
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className="block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary py-3 transition-colors border"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-icons text-gray-400 text-lg">tag</span>
                                            </div>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Project Inquiry / Hiring"
                                                className="block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary py-3 transition-colors border"
                                            />
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                        <div className="relative rounded-md shadow-sm">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell me about your project, timeline, and budget..."
                                                className="block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary p-3 transition-colors resize-none border"
                                            ></textarea>
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-right">{formData.message.length}/500 characters</p>
                                    </div>

                                    {/* Form Actions */}
                                    <div className="flex items-center justify-between pt-2">
                                        {/* Success Message */}
                                        {isSubmitted && (
                                            <div className="text-green-600 text-sm font-medium flex items-center animate-pulse">
                                                <span className="material-icons text-base mr-1">check_circle</span>
                                                Message sent successfully!
                                            </div>
                                        )}
                                        <div className="flex-grow"></div> {/* Spacer */}
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center items-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:-translate-y-0.5"
                                        >
                                            Send Message
                                            <span className="material-icons ml-2 text-lg">send</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Location Map (Visual Representation) */}
            <div
                className="w-full h-64 relative bg-gray-200 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800"
                style={{
                    backgroundImage: `url(${mapBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-primary/20 backdrop-grayscale mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-neutral-surface-dark px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Based in San Francisco</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
