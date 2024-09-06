import classNames from 'classnames';
import styles from './Image.module.scss';

import { useState, forwardRef } from 'react';
import images from '~/assets/image';

console.log(images.noimage);
function ImageDefault({ className, src, alt, fallback: customfallback = images.noimage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customfallback);
    };
    return (
        <img
            className={(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            onError={handleError}
            {...props}
        />
    );
}

// const ImageDefault = forwardRef(({ ...props },ref) {
//     return <img {...props} />;
// })

export default forwardRef(ImageDefault);
