import React from 'react';

//Components
import { Route } from 'react-router-dom';

//Dummby Routes
const CreateProfile = () => <h1>Create Profile</h1>;
const EditProfile = () => <h1>Edit Profile</h1>;
const Settings = () => <h1>Settings</h1>;

const UserAccount = () => {
    return (
        <div>
            <h1>User Profile</h1>
            <Route path="/me/create-profile" component={CreateProfile} />
            <Route path="/me/edit-profile" component={EditProfile} />
            <Route path="/me/settings" component={Settings} />
        </div>
    );
};

export default UserAccount;
