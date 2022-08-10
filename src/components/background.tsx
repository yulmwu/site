import React from 'react';
import Birds from 'vanta/dist/vanta.birds.min';

const Background: React.FC = () => {
    const birdsRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (birdsRef.current)
            Birds({
                el: birdsRef.current,
                backgroundColor: '#25292e',
                quantity: 3,
                speedLimit: 3,
                alignment: 100,
            });
    }, [birdsRef]);

    return <div className="w-[100vw] h-[100vh] bg-background relative" ref={birdsRef} />;
};

export default Background;
