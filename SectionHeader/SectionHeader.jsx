import React from 'react';

const SectionHeader = ({subtitle, title, description, style}) => {
    return (
        <div className={`${style} space-y-6`}>
            {
                subtitle && <h4 className='text-base text-secondary-dark-gray font-raleway font-bold uppercase'>{subtitle}</h4>
            }
            {
                title && <h3 className='text-5xl text-primary-dark-gray font-raleway font-bold'>{title}</h3>
            }
            {
                description && <p className='text-base text-secondary-dark-gray font-roboto font-normal max-w-[756px] w-full text-center'>{description}</p>
            }
        </div>
    );
};

export default SectionHeader;