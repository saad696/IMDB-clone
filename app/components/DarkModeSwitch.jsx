"use client"
import React from 'react';
import { MdNightlight, MdLightMode } from 'react-icons/md';

import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {
    const {systemTheme, theme, setTheme } = useTheme();
    return (
        <div>
            <MdLightMode />
            <MdNightlight />
        </div>
    );
};

export default DarkModeSwitch;
