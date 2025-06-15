import React from 'react';
import useThemeContext from '../../custom_contexts/useThemeContext';

const DietTag = ({children}) => {

    const {isDark} = useThemeContext()

    return (
        <span
            className={` ${isDark ? 'bg-gray-500' : 'bg-gray-200'} text-xs font-medium px-3 py-1 rounded-full`}
        >
            {children}
        </span>
    );
};

export default DietTag;