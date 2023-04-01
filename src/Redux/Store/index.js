import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../Slicers/projectSlicer';
import usersReducer from '../Slicers/userSlicer';
import logInReducer from '../Slicers/LogInOutSlicer';
import paymentSlicer from '../Slicers/paymentSlicer';
import commentsSlicer from '../Slicers/commentsSlicer';

export const Store = configureStore({
    reducer: {
        project: projectReducer,
        user: usersReducer,
        login: logInReducer,
        paymentLink: paymentSlicer,
        comment: commentsSlicer
    }
});

