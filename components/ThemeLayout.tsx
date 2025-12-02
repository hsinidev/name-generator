import React, { useState } from 'react';

interface ModalContent {
  title: string;
  body: React.ReactNode;
}

const modalData: Record<string, ModalContent> = {
  about: {
    title: 'About Doodax',
    body: (
      <div className="text-gray-300 space-y-4 leading-relaxed">
        <p>
          Welcome to <strong>Doodax</strong>, the premier utility for developers, writers, and creative professionals.
        </p>
        <p>
          Born from the need for high-quality, secure, and instant placeholder data, Doodax removes the friction from your testing and creative workflows. Unlike other tools that may track usage or require server-side processing, Doodax is architected for privacy first.
        </p>
        <p>
          Our name generation engine runs entirely in your browser. This means zero latency and 100% data sovereignty. Whether you are populating a database for a new SaaS product or naming characters for a novel, Doodax is designed to be your reliable companion.
        </p>
      </div>
    ),
  },
  contact: {
    title: 'Contact Information',
    body: (
      <div className="text-gray-300 space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h4 className="text-white font-semibold mb-2">Get in Touch</h4>
          <p className="mb-2">We value your feedback and are here to assist with any inquiries regarding Doodax.</p>
          <ul className="space-y-2 text-sm">
            <li><strong>Website:</strong> <a href="https://doodax.com" className="text-blue-400 hover:underline">doodax.com</a></li>
            <li><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a></li>
            <li><strong>Developer:</strong> HSINI MOHAMED</li>
          </ul>
        </div>
        <p className="text-sm text-gray-400">
          For DMCA notices or legal inquiries, please use the email address provided above. We typically respond within 24-48 business hours.
        </p>
      </div>
    ),
  },
  guide: {
    title: 'User Guide',
    body: (
      <div className="text-gray-300 space-y-4">
        <h3 className="text-lg font-semibold text-white">How to Use Doodax</h3>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <strong>Configuration:</strong> Use the control panel to set your preferences.
            <ul className="list-disc list-inside ml-6 mt-1 text-gray-400 text-sm">
              <li>Select <strong>Quantity</strong> (1 to 50 names per batch).</li>
              <li>Choose <strong>Gender</strong> (Male, Female, or Any).</li>
              <li>Pick <strong>Format</strong> (Full Name, First Only, Last Only).</li>
            </ul>
          </li>
          <li><strong>Generate:</strong> Click the large gradient "Generate Names" button. Results appear instantly.</li>
          <li><strong>Copy:</strong> Use the "Copy List" button to copy the entire dataset to your clipboard, ready for pasting into Excel, VS Code, or your database seed files.</li>
        </ol>
      </div>
    ),
  },
  privacy: {
    title: 'Privacy Policy',
    body: (
      <div className="text-gray-300 space-y-4">
        <p><strong>Effective Date:</strong> October 27, 2023</p>
        <p>At Doodax (doodax.com), we prioritize the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Doodax and how we use it.</p>
        
        <h4 className="text-white font-semibold">1. Data Processing</h4>
        <p>Doodax operates as a client-side application. The name generation logic runs locally on your device using JavaScript. We do not transmit your generated settings or results to any backend server.</p>

        <h4 className="text-white font-semibold">2. Log Files</h4>
        <p>Like many other Web sites, Doodax makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks. This is not linked to any information that is personally identifiable.</p>

        <h4 className="text-white font-semibold">3. Cookies</h4>
        <p>Doodax does not use cookies to track personal user activity. However, third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</p>
        
        <p className="text-sm text-gray-400 mt-4">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at hsini.web@gmail.com.</p>
      </div>
    ),
  },
  tos: {
    title: 'Terms of Service',
    body: (
      <div className="text-gray-300 space-y-3">
        <p>By accessing Doodax.com, you agree to be bound by these Terms of Service.</p>
        <h4 className="text-white font-semibold">Use License</h4>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Doodax's website for personal, non-commercial transitory viewing only.</p>
        <h4 className="text-white font-semibold">Disclaimer</h4>
        <p>The materials on Doodax's website are provided on an 'as is' basis. Doodax makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        <h4 className="text-white font-semibold">Limitations</h4>
        <p>In no event shall Doodax or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Doodax's website.</p>
      </div>
    ),
  },
  dmca: {
    title: 'DMCA Policy',
    body: (
      <div className="text-gray-300 space-y-3">
        <p>Doodax respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.</p>
        <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Manager" at <strong>hsini.web@gmail.com</strong>.</p>
        <p>Please include a detailed description of the alleged infringement.</p>
      </div>
    ),
  },
};

const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (key: string) => {
    setModalContent(modalData[key]);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const navLinks = [
    { label: 'About', key: 'about' },
    { label: 'Contact', key: 'contact' },
    { label: 'Guide', key: 'guide' },
    { label: 'Privacy Policy', key: 'privacy' },
    { label: 'Terms of Service', key: 'tos' },
    { label: 'DMCA', key: 'dmca' },
  ];

  return (
    <div className="min-h-screen text-white font-sans relative overflow-x-hidden flex flex-col">
      {/* Background Layer */}
      <div className="galaxy-container">
        <div className="nebula"></div>
        <div className="stars"></div>
      </div>

      {/* Header */}
      <header className="py-4 px-4 sm:px-6 md:px-8 bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-30">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            DOODAX
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => openModal(link.key)}
                className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10 flex flex-col items-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-8 px-4 bg-black/40 backdrop-blur-md border-t border-white/10 mt-auto z-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-white text-lg font-medium">
              Powered by <span className="text-yellow-400 font-bold">HSINI MOHAMED</span>
            </p>
            <a 
              href="https://github.com/hsinidev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors text-sm"
            >
              https://github.com/hsinidev
            </a>
            <p className="text-xs text-gray-500 mt-4">
              &copy; {new Date().getFullYear()} Doodax.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalContent && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col modal-content-animation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-5 border-b border-gray-800 bg-gray-800/50 rounded-t-xl">
              <h2 className="text-xl font-bold text-white tracking-wide">{modalContent.title}</h2>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-full transition-all"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {modalContent.body}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeLayout;