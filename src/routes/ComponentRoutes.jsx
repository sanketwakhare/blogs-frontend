import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ArticleDetailsStories from 'src/components/article/article-details/ArticleDetails.stories';
import ArticleSummaryCardStories from 'src/components/article/article-summary/ArticleSummaryCard.stories';
import ButtonStories from 'src/components/ui/button/Button.stories';
import ChipsStories from 'src/components/ui/chip/Chips.stories';
import ModalStories from 'src/components/ui/modal/Modal.stories';
import ModalContainer from 'src/components/ui/modal/ModalContainer.stories';
import NavBarStories from 'src/components/ui/navbar/NavBar.stories';
import TextFieldStories from 'src/components/ui/text-field/TextField.stories';
import ThemeSwitcherStories from 'src/components/ui/theme-switcher/ThemeSwitcher.stories';
import ToastStories from 'src/components/ui/toast/Toast.stories';
import ComponentsLayout from 'src/stories/ComponentsLayout';

const ComponentRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<ComponentsLayout />}>
                <Route index path="buttons" element={<ButtonStories />}></Route>
                <Route path="text-fields" element={<TextFieldStories />}></Route>
                <Route path="navbar" element={<NavBarStories />}></Route>
                <Route
                    path="modals"
                    element={
                        <div>
                            <h4>Modals</h4>
                            <ModalStories />
                            <ModalContainer />
                        </div>
                    }
                ></Route>
                <Route path="chips" element={<ChipsStories />}></Route>
                <Route path="toasts" element={<ToastStories />}></Route>
                <Route
                    path="theme"
                    element={<ThemeSwitcherStories />}
                ></Route>
                <Route
                    path="article-summary"
                    element={<ArticleSummaryCardStories />}
                ></Route>
                <Route
                    path="article-details"
                    element={<ArticleDetailsStories />}
                ></Route>
            </Route>
        </Routes>
    )
}

export default ComponentRoutes;