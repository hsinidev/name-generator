import React, { useState } from 'react';
import { generateNames, Gender, Format } from '../utils/NameData.ts';

const NameGeneratorTool: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(10);
  const [gender, setGender] = useState<Gender>('Any');
  const [format, setFormat] = useState<Format>('Full Name');
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerate = () => {
    const names = generateNames(quantity, gender, format);
    setGeneratedNames(names);
    setCopied(false);
  };

  const handleCopy = () => {
    if (generatedNames.length > 0) {
      navigator.clipboard.writeText(generatedNames.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="generator" className="w-full max-w-4xl mx-auto mb-16">
      <div className="bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700/50">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Doodax
            </span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            The ultimate random name generator. Secure, customizable, and instant.
          </p>
        </div>

        {/* Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Quantity */}
          <div className="group">
            <label htmlFor="quantity" className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Quantity</label>
            <div className="relative">
              <input
                type="number"
                id="quantity"
                min="1"
                max="50"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Math.min(50, parseInt(e.target.value, 10))))}
                className="w-full bg-gray-800/80 border border-gray-600 rounded-xl py-3 px-4 text-white text-lg focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 transition-all outline-none text-center font-mono"
              />
              <span className="absolute right-4 top-3.5 text-gray-500 text-sm">MAX 50</span>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Gender</label>
            <div className="flex bg-gray-800/80 border border-gray-600 rounded-xl p-1.5">
              {(['Any', 'Male', 'Female'] as Gender[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 text-center py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    gender === g 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Format */}
          <div>
            <label htmlFor="format" className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Format</label>
            <div className="relative">
              <select
                id="format"
                value={format}
                onChange={(e) => setFormat(e.target.value as Format)}
                className="w-full bg-gray-800/80 border border-gray-600 rounded-xl py-3 px-4 text-white appearance-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 transition-all outline-none cursor-pointer"
              >
                <option>Full Name</option>
                <option>First Name Only</option>
                <option>Last Name Only</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="text-center mb-10">
            <button
            onClick={handleGenerate}
            className="w-full md:w-2/3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl text-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            >
            Generate Doodax Names
            </button>
        </div>

        {/* Output Area */}
        {generatedNames.length > 0 && (
          <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <textarea
                readOnly
                value={generatedNames.join('\n')}
                className="w-full h-80 bg-gray-950 border-0 rounded-xl p-6 text-gray-100 font-mono text-lg resize-none focus:outline-none leading-relaxed"
                placeholder="Your generated names will appear here..."
              />
              <button
                onClick={handleCopy}
                className={`absolute top-4 right-4 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  copied 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'bg-gray-800 text-gray-300 hover:bg-white hover:text-black'
                }`}
              >
                {copied ? (
                  <>
                    <svg xmlns="http://www.w.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy List
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NameGeneratorTool;