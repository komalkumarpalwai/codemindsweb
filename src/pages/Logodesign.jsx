import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const LogoDesigner = () => {
  const [logoStyle, setLogoStyle] = useState('modern');
  const [logoColor, setLogoColor] = useState('#00A2C2');
  const [logoText, setLogoText] = useState('YourBrand');
  const [textColor, setTextColor] = useState('#2D3748');
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [iconSize, setIconSize] = useState(100);
  const [isAnimating, setIsAnimating] = useState(false);
  const [savedDesigns, setSavedDesigns] = useState([]);

  const fontOptions = [
    { name: 'Sans-serif', value: 'sans-serif', class: 'font-sans' },
    { name: 'Serif', value: 'serif', class: 'font-serif' },
    { name: 'Modern', value: 'Poppins', class: 'font-mono' },
    { name: 'Rounded', value: 'Nunito', class: 'font-sans' },
  ];

  const renderLogoPreview = () => (
    <motion.div
      className="flex flex-col items-center justify-center"
      animate={{
        scale: isAnimating ? [1, 1.05, 1] : 1,
        rotate: isAnimating ? [0, 5, -5, 0] : 0
      }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 mb-4`}
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          backgroundColor: logoColor,
          transform: logoStyle === 'modern' ? 'rotate(0deg)' : 'rotate(45deg)'
        }}
      >
        <span
          className="text-white font-bold"
          style={{ fontSize: `${iconSize * 0.4}px` }}
        >
          {logoText.charAt(0)}
        </span>
      </div>
      <h3
        className={`text-center ${fontOptions.find(f => f.value === fontFamily)?.class || 'font-sans'}`}
        style={{
          color: textColor,
          fontSize: `${iconSize * 0.3}px`,
          fontWeight: 700
        }}
      >
        {logoText}
      </h3>
    </motion.div>
  );

  const saveDesign = () => {
    const newDesign = {
      id: Date.now(),
      style: logoStyle,
      color: logoColor,
      text: logoText,
      textColor,
      fontFamily,
      iconSize,
      timestamp: new Date().toLocaleString()
    };
    setSavedDesigns(prev => [newDesign, ...prev].slice(0, 5));
    setIsAnimating(true);
  };

  const loadDesign = (design) => {
    setLogoStyle(design.style);
    setLogoColor(design.color);
    setLogoText(design.text);
    setTextColor(design.textColor);
    setFontFamily(design.fontFamily);
    setIconSize(design.iconSize);
    setIsAnimating(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Interactive <span className="text-cyan-600">Logo Designer</span>
          </h2>
          <p className="text-lg text-gray-600">
            Design your perfect logo in real-time with live preview
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Customization Panel */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Logo Customizer</h3>
            <div className="space-y-6">
              {/* Brand Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand Name</label>
                <input
                  type="text"
                  value={logoText}
                  onChange={(e) => setLogoText(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  maxLength="20"
                />
              </div>

              {/* Logo Style */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Logo Style</label>
                <div className="grid grid-cols-2 gap-3">
                  {['modern', 'geometric', 'badge', 'emblem'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setLogoStyle(style)}
                      className={`p-3 border rounded-lg text-center transition-all ${logoStyle === style ? 'border-cyan-500 bg-cyan-50' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <div
                        className="w-12 h-12 mx-auto mb-2 flex items-center justify-center"
                        style={{
                          backgroundColor: logoColor,
                          borderRadius: style === 'badge' ? '4px' : style === 'emblem' ? '0' : '50%',
                          transform: style === 'geometric' ? 'rotate(45deg)' : 'rotate(0deg)'
                        }}
                      >
                        <span className="text-white font-bold text-lg">B</span>
                      </div>
                      <span className="capitalize">{style}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Customization */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Icon Color</label>
                  <div className="flex flex-wrap gap-2">
                    {['#00A2C2', '#4299E1', '#38B2AC', '#ECC94B', '#ED8936', '#F56565', '#9F7AEA', '#000000'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setLogoColor(color)}
                        className={`w-8 h-8 rounded-full transition-transform ${logoColor === color ? 'ring-2 ring-offset-2 ring-cyan-500 scale-110' : 'hover:scale-105'}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    <input
                      type="color"
                      value={logoColor}
                      onChange={(e) => setLogoColor(e.target.value)}
                      className="w-8 h-8 border-2 rounded-full overflow-hidden cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                  <div className="flex flex-wrap gap-2">
                    {['#2D3748', '#1A365D', '#4A5568', '#000000', '#FFFFFF'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setTextColor(color)}
                        className={`w-8 h-8 rounded-full border border-gray-200 transition-transform ${textColor === color ? 'ring-2 ring-offset-2 ring-cyan-500 scale-110' : 'hover:scale-105'}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Font and Size */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  >
                    {fontOptions.map((font) => (
                      <option key={font.value} value={font.value}>{font.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                  <input
                    type="range"
                    min="60"
                    max="180"
                    value={iconSize}
                    onChange={(e) => setIconSize(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={saveDesign}
                className="mt-6 w-full bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition-all font-semibold"
              >
                Save Design
              </button>
            </div>
          </div>

          {/* Live Preview + Saved Designs */}
          <div className="flex flex-col items-center justify-start gap-8">
            {renderLogoPreview()}

            {savedDesigns.length > 0 && (
              <div className="w-full mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Saved Designs</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {savedDesigns.map((design) => (
                    <button
                      key={design.id}
                      onClick={() => loadDesign(design)}
                      className="border p-4 rounded-lg hover:shadow-md transition-all"
                    >
                      <div
                        className="mx-auto mb-2"
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: design.color,
                          borderRadius: '50%'
                        }}
                      >
                        <span className="text-white font-bold text-center block pt-1">
                          {design.text.charAt(0)}
                        </span>
                      </div>
                      <p className="text-xs text-center">{design.text}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoDesigner;
