import React from 'react';

// Data for the logos to keep the JSX clean and maintainable.
const libraries = [
  { name: 'OpenCV', src: '/technologies-opencv.svg' },
  { name: 'OpenCL', src: '/technologies-opencl.svg' },
  { name: 'Open3D', src: '/technologies-open3d.webp' },
  { name: 'scikit-learn', src: '/technologies-scikit-learn.svg' },
  { name: 'PyTorch', src: '/logo-pytorch.svg' },
  { name: 'CoreML', src: '/logo-Core-ML.webp' },
  { name: 'TensorFlow', src: '/logo-tensorflow.svg' },
];

const services = [
  { name: 'Google Vision API', src: '/logo-google-vision-api.svg' },
  { name: 'Amazon Rekognition', src: '/logo-amazon-rekognition.webp' },
  { name: 'Azure Custom vision', src: '/logo-azure-custom-vision.svg' },
  { name: 'Microsoft Computer Vision API', src: '/logo-microsoft-computer-vision-api.svg' },
];

const nnArchitectures = 'YOLO, Fast RCNN, SSD, LWL, KYS, VGG, AlexNet, ResNet, UNet, FCN, DeepLab v3, HRNet, PoseNet, OpenPose, Siamese networks';

// A reusable component for each section to avoid repetition.
const TechSection = ({ title, children }) => (
  <div className="mb-12 ">
    <h3 className="text-xl font-semibold text-gray-700 mb-6">{title}</h3>
    {children}
  </div>
);

const Img3 = () => {
  return (
    <div className="bg-white py-12 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
          Computer Vision Technologies
        </h2>

        {/* Libraries Section */}
        <TechSection title="Libraries">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
            {libraries.map((lib) => (
              <img key={lib.name} src={lib.src} alt={lib.name} className="h-10 sm:h-12 object-contain" />
            ))}
          </div>
        </TechSection>

        {/* Services Section */}
        <TechSection title="Services">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-x-16">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col items-center gap-2 text-center">
                 <img src={service.src} alt={service.name} className="h-12 sm:h-14 object-contain" />
              </div>
            ))}
          </div>
        </TechSection>

        {/* NN Architectures Section */}
        <TechSection title="NN Architectures">
          <p className="text-gray-600 leading-relaxed text-left">
            {nnArchitectures}
          </p>
        </TechSection>

      </div>
    </div>
  );
};

export default Img3;
