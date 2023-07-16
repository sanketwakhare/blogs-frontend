import React from 'react';
import Button from '../button/Button';
import './ThemeSwitcher.scss';

const ThemeTypes = {
    LIGHT: 'light',
    DARK: 'dark',
}

const ThemeSwitcher = (props) => {

    // TODO: set this theme state in localstorage or global state
    const { LIGHT, DARK } = ThemeTypes;

    const { initialTheme = LIGHT, className, ...rest } = props;
    const [theme, setTheme] = React.useState(initialTheme);

    const toggleTheme = () => {
        setTheme((theme) => (theme === LIGHT ? DARK : LIGHT));
        const root = document.querySelector("html");
        const classes = root.classList;
        if (classes.contains(DARK)) {
            classes.remove(DARK);
            classes.add(LIGHT);
        } else {
            classes.remove(LIGHT);
            classes.add(DARK);
        }
    };

    const themeIconClasses = ["fa"];
    themeIconClasses.push(theme === LIGHT ? "fa-moon" : "fa-sun");

    const themeBtnClasses = ["btn-theme-switcher"];
    themeBtnClasses.push(className);

    return (
        <Button onClick={() => toggleTheme()} className={themeBtnClasses.join(" ")} {...rest}>
            <i className={themeIconClasses.join(" ")}></i>
        </Button>
    )
}

export default ThemeSwitcher;
