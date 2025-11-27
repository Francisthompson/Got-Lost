'use client';

import React from 'react';

interface ViewerProps {
  initialScene?: string;
}

const Viewer: React.FC<ViewerProps> = ({ initialScene = 'mainEntrance' }) => {
  return (
    <div className="w-full h-full">
      <iframe
        width="100%"
        height="100%"
        allowFullScreen
        src="https://tourmkr.com/F1JaqhRfJt/46203242p&256.38h&84.93t"
        className="border-0"
        title="Virtual Tour"
      />
    </div>
  );
};

export default Viewer;

